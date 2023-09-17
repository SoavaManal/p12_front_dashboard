import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
import "./score.css";

export default function Scrore(score) {
  const data = [
    { name: "Score", value: score.score.scoreValue },
    { name: "Score", value: score.score.scoreOff },
  ];
  const COLORS = ["#E60000", "#FBFBFB"];
  return (
    <div
      className="score"
      style={{
        width: "35%",
        height: "270px",
        background: "#FBFBFB",
        marginRight: "5px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx={100}
            cy={120}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            strokeWidth={10}
            cornerRadius={10}
            sectorPadding={50}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

            <Label position="center" width="95">
              {`${score.score.scoreValue * 100}% de votre objectif`}
            </Label>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
