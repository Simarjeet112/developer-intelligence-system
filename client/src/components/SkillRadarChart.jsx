import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
  } from "recharts";
  
  const SkillRadarChart = ({ errorDNA }) => {
    if (!errorDNA) return null;
  
    const data = [
      {
        subject: "Loop",
        value: errorDNA.loopBoundary,
      },
      {
        subject: "Recursion",
        value: errorDNA.recursionError,
      },
      {
        subject: "Condition",
        value: errorDNA.conditionMismatch,
      },
    ];
  
    return (
      <div style={{ marginTop: "30px" }}>
        <h3>Error DNA Radar</h3>
  
        <RadarChart
          outerRadius={90}
          width={400}
          height={300}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Errors"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    );
  };
  
  export default SkillRadarChart;
  