import { PieChart, Pie, Cell, Label } from "recharts";
import "./score.css"

export default function Scrore(score) {
  const scoreValue = score.score;
  const scoreOff = 1 - scoreValue;
  const data = [
    { name: "Group A", value: scoreValue },
    { name: "Group B", value: scoreOff },
  ];
  const COLORS = ["#E60000", "#000"];
  return (
    <div className="score">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          // fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          // startAngle={90}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

          <Label position="center" width="95">
            {" "}
            {`${scoreValue * 100}% de votre objectif`}
          </Label>
        </Pie>
      </PieChart>
    </div>
  );
}
