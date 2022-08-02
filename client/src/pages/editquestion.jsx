import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import {getThisQuestion} from '../service/api';
import AddOption from '../components/addoption';
import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import DisplayOption from '../components/displayoption';

const defaultValue={
  statement:''
  
}


const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`


const EditQuestion=()=>{
    const [question, setQuestion] = useState(defaultValue);
    const {id} = useParams();
    useEffect(()=>{
        loadQuestionDetails();
    },[])
    
    const loadQuestionDetails =async()=>{
        const response = await getThisQuestion(id);
        setQuestion(response.data);
    }


    return(
        <Container>
        <Typography variant="h4">Add Option</Typography>
        
           
            <p>{question.statement}</p>
            <AddOption/>
            <DisplayOption/>
        
        </Container>

    )
       
        
   
}

export default EditQuestion;