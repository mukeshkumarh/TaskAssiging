import React from 'react'
import './HomePage3.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HomePage3() {

    const data = [
        {
          name: 1,
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 2,
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 3,
          uv: 4000,
          pv: 2400,
          amt: 2290,
        },
        {
          name: 4,
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 5,
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 6,
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 7,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      

  return (
    <>
<div className='main-containar'>
<div className='containar'>
<div className='second-contenar'>
<span>Good morning! Aditya, <samp className='font-size'> welcome to your swift board</samp></span>
<nav className='nave'>
<div className='button1-containar'>
<button className='button1'>on going task</button>
</div>
<div className='button2-containar'>
<button className='button2'>submitted tasks</button>
</div>
<div className='button3-containar'>
<button className='button3'>completed tasks</button>
</div>
</nav>

<div className='input-wra'>
<input type='text' className='Input'/>
<label className='Name'>month</label>
</div>

<div className='booder'>
<ul className='pakage'>
<li className='new'>
    <a>Your_task(350)</a>
</li>
<li className='your-task'>
    <a>Arpproved(200)</a>
</li>
<li>
    <a>Rejected(80)</a>
</li>
<li>
    <a>Score(80%)</a>
</li>
<li>
    <a>View_history</a>
</li>
</ul>
</div>

<div className='charts'>
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="rgba(255, 0, 0, 0.889)" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="rgba(255, 255, 255, 0.921)" />
        </LineChart>
      </ResponsiveContainer>

</div>
</div>
</div>
</div>
    </>
  )
}
