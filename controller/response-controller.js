import Survey from '../schema/survey-schema.js';
import Question from '../schema/question-schema.js';
import Option from '../schema/option-schema.js';
import Response from '../schema/response-schema.js';

export const addResponses = async(request, response)=>{
    const sresponse = request.body;
    console.log(sresponse);
    
    let surveyID = request.params.id;
    let questions = await Question.find({surveyId:surveyID});
    let questionCount = await Question.find({surveyId:surveyID}).count();
    //console.log(questionCount);
    //for (let i =0; i <questionCount;i++){
       //let questionId = questions._id;
      //  console.log(questionId);
//let responseValue = sresponse.questionId;


   // }
   for (let x in sresponse){
    console.log(x, sresponse[x]);
    let questionId = x;
    let responseValue = sresponse[x];
    let selectedOptionId = await Option.findOne({ questionId: questionId, optionValue: responseValue})._id;
    let newResponse = new Response({
        surveyId: surveyID,
        questionId: questionId,
        optionId: selectedOptionId,
        responseValue:responseValue
      })
  
      await newResponse.save();
   }
   
    
  } 