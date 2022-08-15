import Survey from '../schema/survey-schema.js';
import Question from '../schema/question-schema.js';
import Option from '../schema/option-schema.js';


export const addSurvey = async(request, response)=>{
    const name = request.body.survey.name;
    const startDate = request.body.survey.startDate;
    const endDate = request.body.survey.endDate;
    const isActive = request.body.survey.isActive;
    const userId = request.body.userId;
    let survey ={
      name: name,
      startDate:startDate,
      endDate:endDate,
      isActive:isActive,
      userId:userId
    }
    console.log(survey);

    const newSurvey = new Survey(survey);
    try{
     await newSurvey.save();
     response.status(201).json(newSurvey);
    }catch(error){
      response.status(409).json({message: error.message});
    }
  } 

  export const getSurvey = async(request, response)=>{
    console.log(request.body);
    let userId = request.body.id;
    console.log(userId);
    try{
     const surveys= await Survey.find({userId:userId}).populate("questionIds");
     response.status(200).json(surveys);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }

  export const deleteSurvey = async(request, response)=>{
    try{ 
      const survey = await Survey.findById(request.params.id).remove();
      const question = await Question.remove({surveyId:request.params.id});
      const option = await Option.remove({surveyId:request.params.id});
      
       response.status(200).json({message:'User deleted successfully.'});
      }
    catch(error){
      response.status(409).json({message:error.message});
     // console.log(error.message);
    }

  }
   

  export const getThisSurvey = async(request, response)=>{
  
    try{
     // const user= await User.find({_id: request.params.id});
      const survey = await Survey.findById(request.params.id);
      response.status(200).json(survey);
     
     }catch(error){
       response.status(404).json({message: error.message});
     }
  }
  
  export const editSurvey = async(request, response)=>{
    let survey = request.body;
    const editSurvey = new Survey(survey);
    try{
      await Survey.updateOne({_id:request.params.id}, editSurvey);
      response.status(201).json(editUser);
    }catch(error){
      response.status(409).json({message:error.message});
    }
  }

  export const getSurveyofUser = async(request, response)=>{
    console.log(request.body);
    try{
     const surveys= await Survey.find({}).populate("questionIds");
     response.status(200).json(surveys);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }

  export const getViewSurvey = async(request, response)=>{
    try{
     const surveys= await Survey.find({}).populate("userId");
     response.status(200).json(surveys);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }
  
