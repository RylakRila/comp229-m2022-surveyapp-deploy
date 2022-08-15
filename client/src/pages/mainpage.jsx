import './mainPage.css';
import "./animationStyle.css";
import bgImg from './bgImg.png';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ViewSurveys from '../components/viewsurveys';
import{Link} from 'react-router-dom';
import Foot from '../components/footer';
import Typical from 'react-typical';

const steps = [
   '🖐️Hello🖐️', 1000,
   'Create a survey for your data 📝', 1000,
   'With Centennial Survey👍 ', 1300,
];

function MainAnimation() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </>
  );
}

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
      <>
      <MainAnimation/>
      <div className="mainContainer">
      <div className="top">
            <h1><strong><Typical className={'caca'} wrapper="span" steps={steps} loop={10} /></strong></h1>
         </div>

         <div>
         <img src={bgImg} alt="background" className="bgimg" />
         </div>
         <div className="buttons">
            <Button variant="warning" size="lg" onClick={handleClickStart}>
                REGISTER
            </Button>
            <Button variant="success" size="lg" onClick={handleClickRegister}>
               SIGN IN
            </Button>
        </div>
        <div id="cardContainer">
           <ViewSurveys></ViewSurveys>
        </div>
        <div>
         <Foot/>
        </div>

      </div>
      </>
   );
}
export default Mainpage;
  