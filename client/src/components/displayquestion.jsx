import{useEffect, useState} from 'react'
import{getQuestion, deleteQuestion} from'../service/api.js';
import {  useHistory,useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const DisplayQuestion = ()=>{
    const [questions, setQuestions]=useState([]);
    const {id} = useParams();
  

    useEffect(()=>{
        getAllQuestions(id);
    }, []);

    const getAllQuestions = async(id)=>{
      let response =  await getQuestion(id);
      setQuestions(response.data);
      //console.log(response.data);
    }
    const history = useHistory();

    const deleteQuestionDetails = async(id)=>{
        await deleteQuestion(id);
        window.location.reload();
    }
   const addOptionDetails = async(id)=>{
    history.push("/editquestion/"+id);

}
   
    
    return(
       
      <>
        {
                    questions.map((question, index)=>
                        <Card key={index} bg="light">                          
                                <Card.Header >{question.statement}</Card.Header>
                                 <div>
                                    {
                                    question.optionIds.map((option, index)=>
                                    <div key={index}>
                                        <div style={{marginLeft:20}}>
                                        <input style={{margin:'1em'}} type="radio" name={option.questionId} value={option.optionValue}/>
                                            {option.optionValue}
                                            </div>

                                    </div>)

                                    }
                                 </div>
                                
                                <div>
                                <Button variant = "outline-success" size="sm"  onClick={()=>addOptionDetails(question._id)}>Add Option</Button>
                                <Button variant = "outline-warning" size="sm" onClick = {()=>deleteQuestionDetails(question._id)}>Delete</Button>


                                </div>
                                  
                        </Card>
                    )

                }

      </>
            

       
                

           
    )
}
export default DisplayQuestion;