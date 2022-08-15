import axios from 'axios';

const URL = 'http://localhost:8080';


export const getUser = async()=>{
    try{
        return await axios.get(`${URL}/alluser`);
    }catch(error){
        console.log(`Error while calling getUser api`, error);
    }
}


export const getThisUser = async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log(`Error while calling getThisUser api`, error);
    }
}

export const editUser = async (user, id)=>{
    try{
        return await axios.put(`${URL}/${id}`, user);
    }catch(error){
        console.log(`Error while calling editUser api`, error);
    }
}

export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log(`Error while calling deleteUser api`, error);
    }

}

//survey crud
export const addSurvey=async(survey, userId)=>{
    try{
       return await axios.post(`${URL}/addsurvey`, {survey, userId});
    }catch(error){
        console.log(`error while calling addSurvey api`, error);
    }
}


export const getSurvey = async(userId)=>{
    try{
        return await axios.put(`${URL}/allsurvey`, userId);
    }catch(error){
        console.log(`Error while calling getUser api`, error);
    }
}

export const deleteSurvey = async(id)=>{
    try{
        return await axios.delete(`${URL}/survey/${id}`);
    }catch(error){
        console.log(`Error while calling deleteUser api`, error);
    }

}

export const editSurvey = async (survey, id)=>{
    try{
        return await axios.put(`${URL}/editthissurvey/${id}`, survey);
    }catch(error){
        console.log(`Error while calling editsurvey api`, error);
    }
}

export const getThisSurvey = async(id)=>{
    try{
        return await axios.get(`${URL}/editsurvey/${id}`);
    }catch(error){
        console.log(`Error while calling getThisUser api`, error);
    }
}

export const getViewSurvey = async()=>{
    try{
        return await axios.get(`${URL}/viewsurvey`);
    }catch(error){
        console.log(`Error while calling getViewSurvey api`, error);
    }
}






//Question
export const addTfQuestion=async(data)=>{
    try{
       return await axios.post(`${URL}/addtfquestion`, data);
    }catch(error){
        console.log(`error while calling addTfQuestion api`, error);
    }
}

export const getQuestion = async(id)=>{
    try{
        return await axios.get(`${URL}/allquestion/${id}`);
    }catch(error){
        console.log(`Error while calling getQuestion api`, error);
    }
}

export const deleteQuestion = async(id)=>{
    try{
        return await axios.delete(`${URL}/question/${id}`);
    }catch(error){
        console.log(`Error while calling deleteQuestion api`, error);
    }

}

export const getThisQuestion = async(id)=>{
    try{
        return await axios.get(`${URL}/editquestion/${id}`);
    }catch(error){
        console.log(`Error while calling getThisQuestion api`, error);
    }
}

//Options

export const addOption=async(data)=>{
    try{
       return await axios.post(`${URL}/addoption`, data);
    }catch(error){
        console.log(`error while calling addTfQuestion api`, error);
    }
}

export const getOption = async(id)=>{
    try{
        return await axios.get(`${URL}/alloption/${id}`);
    }catch(error){
        console.log(`Error while calling getOption api`, error);
    }
}

export const deleteOption = async(id)=>{
    try{
        return await axios.delete(`${URL}/option/${id}`);
    }catch(error){
        console.log(`Error while calling deleteOption api`, error);
    }

}

export const addResponses = async (sresponse, id)=>{
    try{
        return await axios.post(`${URL}/addresponses/${id}`, sresponse);
    }catch(error){
        console.log(`Error while calling addResponses api`, error);
    }
}

//response
export const getResponseCount = async(id)=>{
    try{
        return await axios.get(`${URL}/responsereport/${id}`);
    }catch(error){
        console.log(`Error while calling getThisUser api`, error);
    }
}