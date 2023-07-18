import { PieChart, Pie, Cell, Label } from 'recharts';

export default function Scrore(score) {
    const scoreValue=score.score;
    const scoreOff= 1 - scoreValue;
    console.log(score)
    const data = [
        { name: 'Group A', value: scoreValue },
        { name: 'Group B', value: scoreOff },
        
      ];
      const COLORS = ['#E60000','#fff'];
      
  return (
    <PieChart width={800} height={400}>
    <Pie
      data={data}
      cx={120}
      cy={200}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
      startAngle={90}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    <Label position='center'></Label>
    </Pie>
    
      
  </PieChart>
  );
}
