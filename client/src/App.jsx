import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect}from 'react-router-dom'
import Navb from "./components/header";
import Foot from "./components/footer";
import Login from "./pages/login"
import Mainpage from "./pages/mainpage"
import Register from "./pages/register";
import Adduser from './pages/addusers';
import AllUser from './pages/alluser';
import Edituser from './pages/edituser';
import AllSurveys from './pages/allsurveys';
import AddSurvey from './pages/addsurvey';
import EditSurvey from './pages/editsurvey';
import TakeSurvey from './pages/takesurvey';
import EditQuestion from './pages/editquestion';
import Report from './pages/report';
import ChartReport from './pages/chartreport';
import Logout from './components/logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { useState } from 'react';

//import Mainpage from './pages/mainpage';
function App() {
    
    const [authToken, setAuthToken] = useState(localStorage.getItem('user'));
    
  return (
     
    <Router>
    <Navb/>
    <Switch>
      <Route path='/login'>
           <Login/>
       </Route>
       <Route path='/register'>
            {(authToken) ? <Redirect to='/allsurvey'/> : <Register/>}
       </Route>
       <Route path='/adduser'>
            {(authToken) ? <Redirect to='/allsurvey'/> : <Adduser/>}
        </Route>
        
        <Route path='/alluser'>
            <AllUser />
        </Route>
        <Route path='/edituser/:id'>
            <Edituser />
        </Route>
        <Route path='/allsurvey'>
            <AllSurveys />
        </Route>
        <Route path='/addsurvey'>
            <AddSurvey />
        </Route>
        <Route path='/editsurvey/:id'>
            <EditSurvey />
        </Route> 
        <Route path='/editquestion/:id'>
            <EditQuestion />
        </Route> 

        <Route path='/logout'>
            <Logout />
        </Route>
        
        <Route path='/takesurvey/:id'>
            <TakeSurvey />
        </Route>
         
        <Route path='/report/:id'>
            <Report />
        </Route>

        <Route path='/chartreport/:id'>
            <ChartReport />
        </Route>


       <Route path='/'>
        <Mainpage/>
       </Route>

      

       </Switch>
     
    </Router>
   
   
  
  )
};
export default App;