import Question from '../schema/question-schema.js';
import Survey from '../schema/survey-schema.js';
import Option from '../schema/option-schema.js';
export const  addTfQuestion = async(request, response)=>{
    const question = request.body;
    const surveyId = request.body.surveyId;
    //console.log(surveyId);
    const newQuestion = new Question(question);
   // console.log(newQuestion.id);
    try{
     await newQuestion.save();
     const survey = await Survey.findById(surveyId).findOneAndUpdate(
      { _id: surveyId },
      { $push: { questionIds: newQuestion.id} },
     );
    // console.log(survey.questionIds);
     response.status(201).json(newQuestion);
    }catch(error){
      response.status(409).json({message: error.message});
      console.log(error.message);
    }
  } 

  export const getQuestion = async(request, response)=>{
    try{
        let surveyID = request.params.id;
     const questions= await Question.find({ surveyId: surveyID }).populate("surveyId").populate("optionIds");
     response.status(200).json(questions);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }

  export const deleteQuestion = async(request, response)=>{
    try{
     
     const question = await Question.findById(request.params.id).remove();
     const option = await Option.remove({questionId:request.params.id});
     response.status(200).json({message:'Question deleted successfully.'});
    }catch(error){
      response.status(409).json({message:error.message});
    }

  }

  export const getThisQuestion = async(request, response)=>{
  
    try{
     
      const question = await Question.findById(request.params.id).populate("optionIds").populate("surveyId");
      response.status(200).json(question);
     
     }catch(error){
       response.status(404).json({message: error.message});
     }
  }