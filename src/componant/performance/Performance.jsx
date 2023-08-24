import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";
export default function Performance(performance) {
  const data = performance;
  // console.log(data);
  return (
    <div style={{width:"100%", height:"300px"}}>
      <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar
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
