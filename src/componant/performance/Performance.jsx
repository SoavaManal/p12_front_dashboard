import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
export default function Performance(performance) {
  const data = performance;
  return (
    <div
      style={{
        width: "35%",
        height: "270px",
        background: "#282D30",
        marginRight: "25px",
        borderRadius: "5px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.performance}>
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
      </ResponsiveContainer>
    </div>
  );
}
