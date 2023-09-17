import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./activity.css";
export default function Activity(activity) {
  const data = activity;

  const customtext = [
    { value: "Poinds (kg)" },
    { value: "Calories brulées (kCal)" },
  ];
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const valueKg = payload[0].value;
      const valueCalories = payload[1].value;
      return (
        <div className="toolTip">
          <p>{`${valueKg} kg`}</p>
          <p>{`${valueCalories} Kcal`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div
      className="recharts-bar"
      style={{
        width: "100%",
        height: "300px",
        background: "#FBFBFB",
        marginBottom: "25px",
        borderRadius: "5px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.activity}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="2"
            vertical={false}
            horizontal={true}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: -35, right: -35 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#000"
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 1", "dataMax"]}
            tickCount={3}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            fill="#fff"
            tickLine={false}
            axisLine={false}
            tickCount={3}
            hide={true}
            includeHidden={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legends
            payload={customtext}
            verticalAlign="top"
            align="right"
            iconSize="10"
            iconType="circle"
            wrapperStyle={{ paddingBottom: "30px", paddingRight: "10px" }}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            barSize={12}
            fill="#000"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            barSize={12}
            fill="#E60000"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
