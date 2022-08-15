import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {  useParams } from "react-router-dom";
const data = [
  {
    name: 'asdasdadasdasaddddddddddddddddddddddddddddddddddddddd',
    uv: 4000,
   
  },
  {
    name: 'Page B',
    uv: 3000,
    
  },
  {
    name: 'Page C',
    uv: 2000,
    
  },
  {
    name: 'Page D',
    uv: 2780,
    
  },
  
];


const ChartReport=()=>{
    const {id} = useParams();
    const getResponses = async(id)=>{
        let resp =  await getResponses(id);
       
      }

  return(
    <ResponsiveContainer width="70%" aspect={3}>
        <BarChart
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
         
         
          <Bar dataKey="uv" fill="#82ca9d" />
          
        </BarChart>
      </ResponsiveContainer>
  );
}
export default ChartReport;