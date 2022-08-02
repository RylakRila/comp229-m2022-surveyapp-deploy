import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useHistory, useParams } from "react-router-dom";
import{addOption, getThisQuestion} from "../service/api";

const defaultValue={
  statement:''
  
}


function AddOption() {
   
    const {id} = useParams();
   // console.log('id',id)
   const history = useHistory();

    const [option, setOption] = useState(defaultValue);
    const [question, setQuestion] = useState(defaultValue);
    
    const onValueChange=(e)=>{
      //console.log(e.target.name, e.target.value)
      setOption(e.target.value);
       //console.log(option);
   }

   useEffect(()=>{
    loadQuestionDetails();
},[])

const loadQuestionDetails =async()=>{
    const response = await getThisQuestion(id);
    setQuestion(response.data);
   
}
//console.log(question.surveyId);

   
   const addOptionDetails=async()=>{

    let data = {
      "optionValue":option,
       "questionId":id,
       "surveyId": question.surveyId
       
    }
    //console.log(data);
    await addOption(data);
   
    window.location.reload();
  
 }
 
 const handleredirect=()=>{
  let sid = JSON.stringify(question.surveyId._id);
  let surveyidurl = sid.substring(1, sid.length -1);
  history.push("/editsurvey/"+surveyidurl);
  console.log(JSON.stringify(question.surveyId));

 }

  
    return (
      <>
        
  
      
            <Form>
             
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>please input the option</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e)=>{onValueChange(e)}}/>
              </Form.Group>
            </Form>
        
           
            <Button variant="primary" onClick={()=>{addOptionDetails()}}>
              Save Changes
            </Button>
            <Button variant="secondary" onClick = {()=>{handleredirect()}} >
              Back to Question
            </Button>
      </>
    );
  }
  export default AddOption;
