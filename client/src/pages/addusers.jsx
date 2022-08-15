import {useState} from 'react';
//import {addUser} from '../service/api'; 
import { useHistory, Link } from "react-router-dom";
import { login } from '../service/auth-api';
import {FormControl, FormGroup, InputLabel, OutlinedInput, styled, Button} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

     function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'© '}
            {new Date().getFullYear()}
            {'.'}
            {'Centennial Survey'}
          </Typography>
        );
      }

     const theme = createTheme();

    return(
        <>
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '93.1vh' }}>
                <CssBaseline />
                <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}/>
            
                <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
                    <div className="text-center mb-5 alert alert-primary">
                        <label htmlFor="" className="h2">
                            LOG IN
                        </label >
                    </div>
                
                    <div className="form-group">
                        <form onSubmit={loginDetails}>
                            <FormControl variant="outlined" size="small" className="form-control" margin="normal" required>
                                <InputLabel>User Name</InputLabel>
                                <OutlinedInput onChange={(e)=>{onValueChange(e)}} name="username"/>
                            </FormControl>
                            <FormControl variant="outlined" size="small" className="form-control" margin="normal" required>
                                <InputLabel>Password</InputLabel>
                                <OutlinedInput onChange={(e)=>{onValueChange(e)}} name="password" type='password' />
                            </FormControl>
                            
                            <div className="d-grid gap-2 mb-2">
                                <Button variant="contained" size="lg" onClick={()=>loginDetails()}>LOG IN</Button>
                                <Link to={`/register/`}>Don't have an account?</Link>
                            </div>
                            
                            <div>
                                <Copyright sx={{ mt: 5 }} />
                            </div>
                        </form>
                    </div>
                </div>
            </Grid>
        </ThemeProvider>
        </>
    )
}

export default Adduser;