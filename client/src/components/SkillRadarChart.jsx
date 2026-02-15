import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";
  
  const SkillRadarChart = ({ errorDNA }) => {
    if (!errorDNA) return null;
  
    const data = [
      {
        subject: "Loop",
        value: errorDNA.loopBoundary,
        fullMark: 100,
      },
      {
        subject: "Recursion",
        value: errorDNA.recursionError,
        fullMark: 100,
      },
      {
        subject: "Condition",
        value: errorDNA.conditionMismatch,
        fullMark: 100,
      },
    ];
  
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "0.9rem",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>{payload[0].payload.subject}:</strong> {payload[0].value}
            </p>
          </div>
        );
      }
      return null;
    };
  
    return (
      <div
        style={{
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h4
          style={{
            margin: "0 0 10px 0",
            color: "#666",
            fontSize: "0.9rem",
            fontWeight: "normal",
          }}
        >
          Error Distribution
        </h4>
  
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart outerRadius="70%" data={data}>
            <PolarGrid stroke="#e0e0e0" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#666", fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#999", fontSize: 10 }}
            />
            <Radar
              name="Errors"
              dataKey="value"
              stroke="#4a90e2"
              fill="#4a90e2"
              fillOpacity={0.4}
              animationDuration={500}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
  
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            fontSize: "0.8rem",
            color: "#999",
          }}
        >
          <span>⬤ Loop: {errorDNA.loopBoundary}</span>
          <span>⬤ Recursion: {errorDNA.recursionError}</span>
          <span>⬤ Condition: {errorDNA.conditionMismatch}</span>
        </div>
      </div>
    );
  };
  
  export default SkillRadarChart;