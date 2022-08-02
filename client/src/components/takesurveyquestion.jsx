import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import { getThisSurvey} from '../service/api'; 
import {  useHistory, useParams } from "react-router-dom";
import{getQuestion, deleteQuestion} from'../service/api.js';
import Card from 'react-bootstrap/Card';
import {addResponses} from '../service/api'; 

const Container = styled(FormGroup)`
   width:100%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const defaultValue={
    name:'',
    phone:'',
    email:''

}
const TakeSurveyQuestion=()=>{
   
    //const [survey, setSurvey] = useState(defaultValue);


    const [sresponse, setResponse] = useState();
    const {id} = useParams();
    const [questions, setQuestions]=useState([]);
    const history = useHistory();
    const getAllQuestions = async(id)=>{
      let response =  await getQuestion(id);
      setQuestions(response.data);
      //console.log(response.data);
    }


    
    useEffect(()=>{
        //loadSurveyDetails(); 
         getAllQuestions(id);
    },[])
    
    //const loadSurveyDetails =async()=>{
        //const response = await getThisSurvey(id);
        //setSurvey(response.data);
   // }
 
      
    const onValueChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        setResponse({...sresponse, [e.target.name]: e.target.value});
    }


    const addResponseDetails=async()=>{ 
        
        console.log(sresponse);
       // await addResponses(sresponse, id);
         history.push("/");
      }
        
      const handlesubmit = async()=>{
        alert("submit success!");
        await addResponses(sresponse, id);
      
      }
       

    return(
        <Container>
           <form onSubmit={()=>addResponseDetails()}>
            {
                    questions.map((question, index)=>
                        <Card key={index}>                          
                                <Card.Body >{question.statement}</Card.Body>
                                 <div>
                                    {
                                    question.optionIds.map((option, index)=>
                                    <ul key={index} >
                                        <li >
                                        <input type="radio" name={option.questionId} value={option.optionValue} onChange={(e)=>{onValueChange(e)}} />
                                            {option.optionValue}
                                            
                                            </li>

                                    </ul>)
                                    }
                                 </div>      
                        </Card>
                    ) 
                }
                 <Button variant="contained" type="submit" onClick={()=>{handlesubmit()}}>submit</Button>
            </form> 
           
          
      </Container>
    )

}

export default TakeSurveyQuestion;