import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    <div className="chart-container">
      <ResponsiveContainer width="90%" height="70%">
        <BarChart
          // className="recharts-bar"
          width={900}
          // height={300}
          data={data.activity}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} horizontal={true}/>
          <XAxis dataKey="day" tickLine={false} padding={{ left: -50, right: -50 }}/>
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
          <Legend
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
