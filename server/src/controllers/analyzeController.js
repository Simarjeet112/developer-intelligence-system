const User = require("../models/User");

exports.analyzeCode = async (req, res) => {
  try {
    const { userId, code } = req.body;

    if (!userId || !code) {
      return res.status(400).json({
        message: "userId and code are required",
      });
    }

    let mistakeType = "none";
    let explanation = "Code looks fine.";
    let logicScore = 100;

    // 🔹 Rule 1: Off-by-one loop error detection
    if (/for\s*\(.*<=.*;/.test(code)) {
      mistakeType = "loopBoundary";
      explanation = "Possible off-by-one loop boundary issue detected.";
      logicScore -= 10;
    }

    // 🔹 Rule 2: Recursion without base case
    const recursionPattern = /function\s+(\w+).*{([\s\S]*)}/;
    const match = recursionPattern.exec(code);

    if (match) {
      const functionName = match[1];
      const functionBody = match[2];

      if (
        functionBody.includes(functionName + "(") &&
        !functionBody.includes("if")
      ) {
        mistakeType = "recursionError";
        explanation = "Recursive function detected without clear base case.";
        logicScore -= 15;
      }
    }

    // 🔹 Find or create user
    let user = await User.findOne({ userId });

    if (!user) {
      user = new User({ userId });
    }

    // 🔹 Update Error DNA
    if (mistakeType !== "none") {
      user.errorDNA[mistakeType] += 1;
    }

    // 🔹 Save session
    user.sessions.push({
      code,
      mistakeType,
      logicScore,
    });

    await user.save();

    return res.json({
      explanation,
      mistakeType,
      logicScore,
      errorDNA: user.errorDNA,
    });
  } catch (error) {
    console.error("Analyze error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
