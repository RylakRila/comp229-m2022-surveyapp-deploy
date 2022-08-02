import './mainPage.css';
import bgImg from './bgImg.png';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ViewSurveys from '../components/viewsurveys';
import{Link} from 'react-router-dom';

function Mainpage() {
   const history = useHistory();
   const handleClickStart = () => {
      // go to SurveyPage
      history.push('/register');
   };
   const handleClickRegister = () => {
      // go to SurveyPage
      history.push('/adduser');
   };

   return (
      <div className="mainContainer">
         <div className="top">
            <h1>
               <strong>The best Survey site</strong>
            </h1>
            <h3>Create & Collect</h3>

            <div>This is explanation section</div>
            <img src={bgImg} alt="" className="bgimg" />
         </div>
         <div className="buttons">
            <Button variant="warning" size="lg" onClick={handleClickStart}>
               Get Started!
            </Button>
            <Button variant="success" size="lg" onClick={handleClickRegister}>
               Sigh in
            </Button>
         </div>
         <div className="cardConainer">
           
            <ViewSurveys/>
         </div>
      </div>
   );
}
export default Mainpage;
  