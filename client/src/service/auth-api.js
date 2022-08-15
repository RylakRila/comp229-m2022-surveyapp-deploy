import axios from 'axios';
const URL = 'https://comp229-m2022-survey-app.herokuapp.com/api';

export const userRegister = async(inputs)=>{
    try{
        return await axios.post(`${URL}/register`, inputs);
    }catch(error){
        console.log(`Error while calling userRegister api`, error);
    }
}

export const login = async(data)=>{
    try{
        return await axios.post(`${URL}/login`, data).then(response => {
            if(response.data.token)
            {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    }catch(error){
        console.log(`Error while calling login api`, error);
    }
}

export const getCurrentUser=()=>
{
    const userString = localStorage.getItem("user");
    if(userString)
    {
        return JSON.parse(userString);
    }
  return false;
}

export const logout=async()=>
{
        localStorage.removeItem("user");
   
}