import React, { useState } from 'react'
import { OutlinedInput, Button, FormControl, InputLabel, TextField, FormHelperText } from '@mui/material';
import { userRegister} from '../service/auth-api';
import { useHistory } from 'react-router-dom';
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

  return (
    <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>
      <div className='text-center mb-5 alert alert-primary'>
        <label htmlFor='' className="h2">
          Register
        </label>
      </div>

      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <FormControl name="name" variant="outlined" size="small" className="form-control"margin="normal">
            <InputLabel>Name</InputLabel>
             <OutlinedInput name="name" value={inputs.name} onChange={handleChange} />
          </FormControl>

          <FormControl name="email" type='email' variant="outlined" size="small" className="form-control" margin="normal">
            <InputLabel>Email</InputLabel>
             <OutlinedInput name="email" type="email" value={inputs.email} onChange={handleChange} />
          </FormControl>

          <FormControl name="password" variant="outlined" size="small" className="form-control" margin="normal">
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
          value={inputs.confirmPassword} onChange={handleChange} margin='normal'>
          </TextField>

          {inputs.password && inputs.confirmPassword && (
          <FormHelperText className="ml-1 mt-1">
            {inputs.password === inputs.confirmPassword ? 
            <span className="text-success">Password matches</span> : <span className="text-danger">Password does not match</span>}
          </FormHelperText>)}

          <Button variant='contained' type="submit" disabled={!inputs.name || !inputs.email || !inputs.password 
          || !inputs.confirmPassword || inputs.password !== inputs.confirmPassword || !sixChar || !lowerChar || !upperChar 
          || !number || !specialChar}>Register</Button>
        </form>
      </div>
    </div>
  )
}

export default Register