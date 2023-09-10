import { PieChart, Pie, Cell, Label } from "recharts";
import "./score.css";

export default function Scrore(score) {
  console.log(score.score);
  const data = [
    { name: "Score", value: score.score.scoreValue },
    { name: "Score", value: score.score.scoreOff },
  ];
  console.log(data);
  const COLORS = ["#E60000", "#FBFBFB"];
  return (
    <div className="score">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          dataKey="value"
          innerRadius={60}
          outerRadius={80}
          startAngle={90}
          strokeWidth={10}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

          <Label position="center" width="95">
            {`${score.score.scoreValue * 100}% de votre objectif`}
          </Label>
        </Pie>
      </PieChart>
    </div>
  );
}
