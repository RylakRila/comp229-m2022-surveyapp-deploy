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
                        <Card key={index}>                          
                                <Card.Body >{question.statement}</Card.Body>
                                 <div>
                                    {
                                    question.optionIds.map((option, index)=>
                                    <ul key={index}>
                                        <li>
                                        <input type="radio" name={option.questionId} value={option.optionValue}/>
                                            {option.optionValue}
                                            </li>

                                    </ul>)

                                    }
                                 </div>
                                
                                <div>
                                <Button variant = "primary"  onClick={()=>addOptionDetails(question._id)}>Add Option</Button>
                                <Button variant = "primary" onClick = {()=>deleteQuestionDetails(question._id)}>Delete</Button>


                                </div>
                                  
                        </Card>
                    )

                }

      </>
            

       
                

           
    )
}
export default DisplayQuestion;