import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { 
  TextField, 
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './login.css';
import{Link} from 'react-router-dom';
import {login} from '../service/auth-api';

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(username, password);
    login(username, password).then((data) => {

      if(data.success)
      {
         
          history.push("/allsurvey"); 
          window.location.reload();
      }
      else
      { // replace the Connect-Flash Messaging
         window.location.reload();
      }
      
  })

  };

  return (
    <>
       <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
      <div className="text-center mb-5 alert alert-primary">
        <label htmlFor="" className="h2">
          Login
        </label >
      </div>

      <div className="form-group" >
        <TextField size="small" variant="outlined" className="form-control" label="user name" value={username} 
          onChange={(e) => setUserName(e.target.value)}>
        </TextField>
      </div>

      
      
      <div className="text-center mt-4">
        <Button variant='contained' type='submit' disabled={!username || !password} onClick={handleSubmit()}>Login</Button>
      </div>
      <Link to={`/register/`}>register</Link>
    </div>

    
    </>
   
  )
}

export default Login
