import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { OutlinedInput, Button, FormControl, InputLabel, TextField, FormHelperText } from '@mui/material';
import { userRegister} from '../service/auth-api';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    userRegister(inputs);
    alert("registration success!");
    history.push('/');

  };

  let sixChar = inputs.password.length >= 6;
  let lowerChar = /(.*[a-z].*)/.test(inputs.password); 
  let upperChar = /(.*[A-Z].*)/.test(inputs.password);
  let number = /(.*[0-9].*)/.test(inputs.password);
  let specialChar = /(.*[^a-zA-Z0-9].*)/.test(inputs.password);

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

  return (
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
    
        <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>
          <div className='text-center mb-5 alert alert-primary'>
            <label htmlFor='' className="h2">
              REGISTER
            </label>
          </div>

          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <FormControl name="name" variant="outlined" size="small" className="form-control" margin="normal" required>
                <InputLabel>Name</InputLabel>
                <OutlinedInput name="name" value={inputs.name} onChange={handleChange} />
              </FormControl>

              <FormControl name="email" type='email' variant="outlined" size="small" className="form-control" margin="normal" required>
                <InputLabel>Email</InputLabel>
                <OutlinedInput name="email" type="email" value={inputs.email} onChange={handleChange} />
              </FormControl>

              <FormControl name="password" variant="outlined" size="small" className="form-control" margin="normal" required>
                <InputLabel>Password</InputLabel>
                <OutlinedInput label="Password" name="password" type='password' value={inputs.password} onChange={handleChange} />
              </FormControl>

              <div className='ml-1'>
                <div>
                  <small className={sixChar ? 'text-success' : 'text-danger'}> At least 6 characters</small>
                </div>
              </div>
              <div className='ml-1'>
                <div>
                  <small className={lowerChar ? 'text-success' : 'text-danger'}> At least 1 lowercase letter</small>
                </div>
              </div>
              <div className='ml-1'>
                <div>
                  <small className={upperChar ? 'text-success' : 'text-danger'}> At least 1 capital letter</small>
                </div>
              </div>
              <div className='ml-1'>
                <div>
                  <small className={number ? 'text-success' : 'text-danger'}> At least 1 number</small>
                </div>
              </div>
              <div className='ml-1'>
                <div>
                  <small className={specialChar ? 'text-success' : 'text-danger'}> At least 1 special character </small>
                </div>
              </div>

              <TextField name="confirmPassword" size="small" type="password" variant="outlined" className="form-control" label="Confirm Password" 
              value={inputs.confirmPassword} onChange={handleChange} margin='normal' required>
              </TextField>

              {inputs.password && inputs.confirmPassword && (
              <FormHelperText className="ml-1 mt-1">
                {inputs.password === inputs.confirmPassword ? 
                <span className="text-success">Password matches</span> : <span className="text-danger">Password does not match</span>}
              </FormHelperText>)}
                  
              <div className="d-grid gap-2 mb-2">
                <Button variant='contained' type="submit" disabled={!inputs.name || !inputs.email || !inputs.password 
                || !inputs.confirmPassword || inputs.password !== inputs.confirmPassword || !sixChar || !lowerChar || !upperChar 
                || !number || !specialChar}>Register</Button>
                <Link to={`/adduser/`}>Already have an account?</Link>
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

export default Register