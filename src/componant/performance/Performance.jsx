import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
export default function Performance(performance) {
  const data = performance;
  console.log(data);
  return (
    // <div >
    <div
      className="chart-graph"
      style={{
        background: "#282D30",
        margin: "auto",
        padding: "0px",
        borderRadius: "5px",
      }}
    >
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <RadarChart
          width={300}
          height={300}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data.performance}
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kindTransform"
            stroke="#fff"
            tickLine={false}
            style={{ fontSize: "0.9rem", fontWeight: "700" }}
          />
          <Radar
            width={250}
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}
