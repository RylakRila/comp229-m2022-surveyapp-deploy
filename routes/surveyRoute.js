import express from 'express';
//import {addUser, getUser,getThisUser, editUser, deleteUser} from '../controller/user-controller.js';
import {addSurvey, getSurvey, deleteSurvey, getThisSurvey, editSurvey, getViewSurvey} from '../controller/survey-controller.js';
import { addTfQuestion, getQuestion, deleteQuestion, getThisQuestion} from '../controller/tfquestion-controller.js';
import {addOption, getOption, deleteOption} from'../controller/option-controller.js';
import {addResponses} from '../controller/response-controller.js';

const router = express.Router();
//users
//router.post('/adduser',addUser);
//router.get('/alluser', getUser);
//router.get('/:id', getThisUser);
//router.put('/:id', editUser);
//router.delete('/:id', deleteUser);
//surveys

router.post('/addtfquestion', addTfQuestion);
router.get('/allquestion/:id', getQuestion);
router.delete('/question/:id', deleteQuestion);
router.get('/editquestion/:id', getThisQuestion);

router.post('/addsurvey', addSurvey);
router.put('/allsurvey', getSurvey);
router.delete('/survey/:id', deleteSurvey);
router.get('/editsurvey/:id', getThisSurvey);

router.put('/editthissurvey/:id', editSurvey);
router.get('/viewsurvey',getViewSurvey);

router.post('/addoption', addOption);
router.get('/alloption/:id', getOption);
router.delete('/option/:id', deleteOption);

router.post ('/addresponses/:id',addResponses);

export default router;