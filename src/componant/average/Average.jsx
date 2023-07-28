import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
export default function Average(avrSession) {
  const data = avrSession;
  return (
    <LineChart
      width={500}
      height={300}
      data={data.avrSession}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid horizontal={false} vertical={false} fill="#E60000"/>
      <XAxis dataKey="day" />
      <YAxis yAxisId="left" />
      {/* <YAxis yAxisId="right" orientation="right" /> */}
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        activeDot={{ r: 8 }}
      />
      {/* <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  );
}
