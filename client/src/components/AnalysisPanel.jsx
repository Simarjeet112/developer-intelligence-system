import SkillRadarChart from "./SkillRadarChart";

const AnalysisPanel = ({ result }) => {
    if (!result) return null;
  
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>Analysis Result</h3>
  
        <p>
          <strong>Mistake:</strong> {result.mistakeType}
        </p>
  
        <p>
          <strong>Explanation:</strong> {result.explanation}
        </p>
  
        <p>
          <strong>Logic Score:</strong> {result.logicScore}
        </p>
  
        <hr />
  
        <h4>Error DNA Profile</h4>
  
        <ul>
          <li>Loop Boundary: {result.errorDNA.loopBoundary}</li>
          <li>Recursion Error: {result.errorDNA.recursionError}</li>
          <li>Condition Mismatch: {result.errorDNA.conditionMismatch}</li>
        </ul>
        <SkillRadarChart errorDNA={result.errorDNA} />
      </div>
    );
  };
  
  export default AnalysisPanel;
  