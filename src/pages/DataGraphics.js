import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import RingAnimate from '../componets/RingAnimate';

const barData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const dataValue = 65; // 單筆數據，表示填充的百分比

const donutData = [
  { x: 'Filled', y: dataValue },
  { x: 'Empty', y: 100 - dataValue },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomXAxis = ({ dataKey = 'name' }) => <XAxis dataKey={dataKey} />;
const CustomYAxis = () => <YAxis />;

function MyCharts() {
  return (
    <div className='flex flex-wrap justify-around'>
      <div>
        <h2>Bar Chart</h2>
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <CustomXAxis />
          <CustomYAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <h2>Pie Chart</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {`${pieData[index].name} ${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div>
        <h2>RingAnimate by Victory</h2>
        <RingAnimate data={donutData} />
      </div>
    </div>
  );
}

export default MyCharts;
