import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
export default function Activity(activity){
    const data=activity;
    return (
        <BarChart
          width={800}
          height={300}
          data={data.activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#000" barSize={12} radius={[50,50,0,0]}/>
          <Bar dataKey="calories" fill="#E60000" barSize={12} radius={[50,50,0,0]}/>
          <Label fontSize={18} fill="#000">Activité cotidienne</Label>
        </BarChart>
    )
}