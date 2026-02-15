import SkillRadarChart from "./SkillRadarChart";

const AnalysisPanel = ({ result }) => {
  if (!result) return null;

  // Helper function to determine score color
  const getScoreColor = (score) => {
    if (score >= 80) return "#4caf50";
    if (score >= 60) return "#ff9800";
    return "#f44336";
  };

  return (
    <div
      className="analysis-panel"
      style={{
        marginTop: "30px",
        padding: "24px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          margin: "0 0 20px 0",
          color: "#1a2639",
          fontSize: "1.5rem",
          borderBottom: "3px solid #4a90e2",
          paddingBottom: "10px",
        }}
      >
         Analysis Result
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ margin: "0 0 8px 0", color: "#666", fontSize: "0.9rem" }}>
            <strong>Mistake Type</strong>
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "1.2rem",
              color: "#e65100",
              fontWeight: "600",
            }}
          >
            {result.mistakeType}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ margin: "0 0 8px 0", color: "#666", fontSize: "0.9rem" }}>
            <strong>Logic Score</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: getScoreColor(result.logicScore),
              }}
            >
              {result.logicScore}
            </span>
            <div
              style={{
                flex: 1,
                height: "8px",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${result.logicScore}%`,
                  height: "100%",
                  backgroundColor: getScoreColor(result.logicScore),
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "25px",
          borderLeft: "4px solid #4a90e2",
        }}
      >
        <p style={{ margin: "0 0 8px 0", color: "#666", fontSize: "0.9rem" }}>
          <strong>Explanation</strong>
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          {result.explanation}
        </p>
      </div>

      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "2px dashed #ddd",
        }}
      />

      <h4
        style={{
          margin: "0 0 20px 0",
          color: "#1a2639",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        🧬 Error DNA Profile
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li
              style={{
                marginBottom: "15px",
                padding: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontWeight: "600", color: "#e65100" }}>
                🔄 Loop Boundary:
              </span>
              <span
                style={{ float: "right", fontWeight: "bold", color: "#4a90e2" }}
              >
                {result.errorDNA.loopBoundary}
              </span>
            </li>
            <li
              style={{
                marginBottom: "15px",
                padding: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontWeight: "600", color: "#e65100" }}>
                🔁 Recursion Error:
              </span>
              <span
                style={{ float: "right", fontWeight: "bold", color: "#4a90e2" }}
              >
                {result.errorDNA.recursionError}
              </span>
            </li>
            <li
              style={{
                padding: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontWeight: "600", color: "#e65100" }}>
                ⚡ Condition Mismatch:
              </span>
              <span
                style={{ float: "right", fontWeight: "bold", color: "#4a90e2" }}
              >
                {result.errorDNA.conditionMismatch}
              </span>
            </li>
          </ul>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SkillRadarChart errorDNA={result.errorDNA} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;
