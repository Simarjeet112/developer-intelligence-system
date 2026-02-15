import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import AnalyzeButton from "../components/AnalyzeButton";
import AnalysisPanel from "../components/AnalysisPanel";
import API from "../services/api";

const EditorPage = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await API.post("/analyze", {
        userId: "user1",
        code,
      });

      setResult(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Developer Intelligence System</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1 }}>
          <CodeEditor code={code} setCode={setCode} />
          <AnalyzeButton onClick={handleAnalyze} />
        </div>

        {/* RIGHT SIDE */}
        <div style={{ flex: 1 }}>
          <AnalysisPanel result={result} />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
