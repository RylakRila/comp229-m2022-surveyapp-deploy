import Option from '../schema/option-schema.js';
import Question from '../schema/question-schema.js';

export const  addOption = async(request, response)=>{
    const option = request.body;
    const questionId = request.body.questionId;
    const newOption = new Option(option);
    try{
     await newOption.save();
     const question = await Question.findById(questionId).findOneAndUpdate(
      { _id: questionId },
      { $push: { optionIds: newOption.id} },
     );

     response.status(201).json(newOption);
    }catch(error){
      response.status(409).json({message: error.message});
    }
  } 

  export const getOption = async(request, response)=>{
    try{
        let questionID = request.params.id;
     const options= await Option.find({ questionId: questionID }).populate("surveyId");
     response.status(200).json(options);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }

  export const deleteOption = async(request, response)=>{
    try{
     
     const option = await Option.findById(request.params.id).remove();
   
     response.status(200).json({message:'Option deleted successfully.'});
    }catch(error){
      response.status(409).json({message:error.message});
    }

  }