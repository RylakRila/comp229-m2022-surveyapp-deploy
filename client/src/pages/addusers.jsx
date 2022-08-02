import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState} from 'react';
//import {addUser} from '../service/api'; 
import { useHistory } from "react-router-dom";
import{Link} from 'react-router-dom';
import {login} from '../service/auth-api';
const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const defaultValue={
    username:'',
    password:'',
    
}

const Adduser=()=>{
    const [inputs, setInputs] = useState(defaultValue);
    const history = useHistory();
    

    const onValueChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        setInputs({...inputs, [e.target.name]: e.target.value});
       // console.log(user);
     }

     const loginDetails=async()=>{
       login(inputs).then((data) => {

        if(data.success){
            history.push("/allsurvey"); // temporary link to the home page for testing
            window.location.reload();
        }else
        {
            //  Need to replace the Connect-Flash Messaging
            window.location.reload();
        }
        
    }, error =>{
        //  Need to replace the Connect-Flash Messaging
        window.location.reload();
    });
      // console.log(inputs);
        
     }

    return(
        <Container>
            <Typography variant="h4">log in</Typography>
            <FormControl>
                <InputLabel >User Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="password"/>
            </FormControl>
            
            <FormControl>
            <Button variant="contained" onClick={()=>loginDetails()}>Log in</Button>
            </FormControl>
            <div>
             <Link to={`/register/`}>register</Link>
             </div>

        </Container>
    )
}

export default Adduser;