import React, { PureComponent ,useState, useEffect} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie} from 'recharts';
import {  useParams } from "react-router-dom";
import {getResponseCount, getOption} from "../service/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


const ChartReport=()=>{
  const [options, setOptions] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getResponseCount();
  });
  
  const getResponseCount = async () => {
    let resp =  await getOption(id);
    setOptions(resp.data);
  //console.log(resp.data);
  }
  
  //console.log(options);
  let data =[];
  
  for (let x in options)
  {
    let opValue = options[x].optionValue;
    let resCount = options[x].responseIds.length;
    let perdata= {
      optionValue : opValue,
      responseCount:resCount

    }
    //console.log(perdata);
    data.push(perdata);

  }
  
  return(
    <>
    
    
    <div  style={{textAlign:"center" , margin:"2%"}}>
      <h2>Response Report</h2>

    </div>

    
    
    <div  style={{ width: '100%', height: 300}}> 
    <ResponsiveContainer>
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
          <XAxis dataKey="optionValue" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="responseCount" fill="#82ca9d" />        
        </BarChart>


    </ResponsiveContainer>
    <ResponsiveContainer>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="responseCount"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>        
      </ResponsiveContainer> 






    </div>
      </> 
    

  );
}
export default ChartReport;