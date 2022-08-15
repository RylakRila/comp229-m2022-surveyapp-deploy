import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getSurvey, deleteSurvey} from'../service/api.js';
import{Link} from 'react-router-dom';
import {getCurrentUser} from '../service/auth-api';
import 'moment-timezone';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const StyledTable = styled(Table)`
    width:80%;
    margin:2em auto 0 auto;
`
    



const AllSurveys = ()=>{
    const [surveys, setSurveys]=useState([]);
    let userId = getCurrentUser().user.id;

    useEffect(()=>{
        getAllSurveys();
    }, []);
    const getAllSurveys = async()=>{
      let response =  await getSurvey({'id':userId});
      setSurveys(response.data);
      //console.log(response.data);
    }

    const deleteSurveyDetails = async(id)=>{
        await deleteSurvey(id);
        getAllSurveys();

    }
    const AddButton = styled(Button)`
    margin-left:10%;
    margin-top:2em;
`


    return(
        <>
         <AddButton variant="contained" color="success" href="./addsurvey" >
            Add Survey
        </AddButton>
        <StyledTable className="table-responsive table table-striped table-bordered table-hover">
          <thead className="table-success">
              <tr className="text-center">
              
                 <th scope="col">Survey Name</th>
                 <th scope="col">Start Date</th>
                 <th scope="col">End Date</th>
               
                 <th></th>
                 
              </tr>
          </thead>
             <tbody >
         

 {
                    surveys.map((survey, index)=>
                            <tr key={index} className="text-center">
                            <td>{survey.name}</td>
                            <td>{moment.utc(survey.startDate).format('YYYY-MM-DD HH:mm A')}</td>
                            <td>{moment.utc(survey.endDate).format('YYYY-MM-DD HH:mm A')}</td>
                            <td>
                            <Button size="medium" variant ="text" color="success" style={{marginRight:20}} component={Link} to={`/editsurvey/${survey._id}`}>Edit</Button>
                                <Button size="medium" variant = "text" color="success" style={{marginRight:20}} onClick = {()=>deleteSurveyDetails(survey._id)} >Delete</Button>
                                <Button size="medium" variant = "text" color="success" component={Link} to={`/report/${survey._id}`}  >Report</Button>
                            </td>

                            </tr>
                       

                          

                    )


                }
              
             
            
              </tbody>
        </StyledTable>
        
        
        
        
        </>
       
    )
   
}
export default AllSurveys;