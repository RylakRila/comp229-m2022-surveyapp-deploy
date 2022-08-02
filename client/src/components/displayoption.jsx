import{useEffect, useState} from 'react'

import {  useHistory,useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getOption, deleteOption} from '../service/api.js';



const DisplayOption = ()=>{
    const [options, setOptions]=useState([]);
    const {id} = useParams();
  

    useEffect(()=>{
        getAllOptions(id);
    }, []);

    const getAllOptions = async(id)=>{
      let response =  await getOption(id);
      setOptions(response.data);
      //console.log(response.data);
    }

    const deleteOptionDetails = async(id)=>{
        await deleteOption(id);
        window.location.reload();
    }
   
   
    
    return(
       
      <>
        {
                    options.map((option, index)=>
                        <ul key={index}>                          
                                <li >{option.optionValue}</li>
                                
                                
                                
                                <div>
                                
                                <Button variant = "primary" onClick = {()=>deleteOptionDetails(option._id)}>Delete</Button>


                                </div>
                                  
                        </ul>
                    )

                }

      </>
            

       
                

           
    )
}
export default DisplayOption;