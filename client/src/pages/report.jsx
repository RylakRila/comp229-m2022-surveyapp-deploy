import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import { getThisSurvey} from '../service/api'; 
import {  useHistory, useParams } from "react-router-dom";
import{getQuestion, getResponseCount} from'../service/api.js';
import "./report.css"
import{Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Container = styled(FormGroup)`
   width:70%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
   font-family:Arial;
   font-size:1.2em;
   
`


const defaultValue={
    name:'',
    phone:'',
    email:''

}
const Report=()=>{
   
    //const [survey, setSurvey] = useState(defaultValue);

    
    const [questions, setQuestion] = useState([]);
    const {id} = useParams();
  
    const history = useHistory();

    const getAllQuestions = async(id)=>{
      let resp =  await getQuestion(id);
      setQuestion(resp.data);
      console.log(resp.data);
    }

 
    
    useEffect(()=>{
        //loadSurveyDetails(); 
         getAllQuestions(id);
    },[])
    
    //const loadSurveyDetails =async()=>{
        //const response = await getThisSurvey(id);
        //setSurvey(response.data);
   // }
 
      
  


    
        
     
       

    return(
        <Container>
           <form >
            {
                    questions.map((question, index)=>
                        <Card key={index} bg="light" >                          
                                <Card.Header >{question.statement}</Card.Header>
                                 <div>
                                    {
                                    question.optionIds.map((option, index)=>
                                    <div key={index} >
                                        <div style={{marginLeft:20}}>
                                        <input style={{margin:'1em'}} type="radio" name={option.questionId} value={option.optionValue}  />
                                            {option.optionValue} 
                                            <span id="rc" >response count:{option.responseIds.length}</span>
                                            
                                            </div>
                                            

                                    </div>)
                                    
                                    }
                                   
                                 </div>    
                        </Card>
                    ) 
                } 
                
                
            </form> 
           
          
      </Container>
    )

}




export default Report;