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
    <div style={{ background: "#282D30", margin: "auto",padding:"0px", borderRadius: "5px" }}>
      
        <RadarChart
          width={300}
          height={300}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data.performance}
          // margin={{top: 25, right: 25, bottom: 25, left: 25}}
        >
          <PolarGrid gridType="polygon" radialLines={false}/>
          <PolarAngleAxis
            dataKey="kindTransform"
            stroke="#fff"
            tickLine={false}
            style={{fontSize :"0.9rem", fontWeight:"700"}}
          />
          <Radar
            width={250}
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
  
    </div>
  );
}
