import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./average.css";
export default function Average(avrSession) {
  const data = avrSession.avrSession;

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const sessionValue = payload[0].value; // Valeur de la série
      return (
        <div style={{ background: "white", padding: "5px" }}>
          <p>{`${sessionValue} min`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div
      className="linechart"
      style={{
        width: "35%",
        height: "270px",
        background: "#E60000",
        marginRight: "25px",
        paddingBottom: "5px",
        borderRadius: "5px"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal={false} vertical={false} fill="#E60000" />
          <XAxis
            dataKey="dayTransform"
            axisLine={false}
            tickLine={false}
            tickSize={15}
            tick={{ stroke: "#fff", strokeWidth: 0.6 }}
            padding={{ left: 5 }}
          />
          <YAxis hide={true} domain={["dataMin", "dataMax"]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.1,
              strokeWidth: 50,
            }}
          />
          <Area
            type="monotone"
            dataKey="sessions"
            stroke="#fff"
            fill="#E60000"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
