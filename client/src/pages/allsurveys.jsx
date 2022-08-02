import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getSurvey, deleteSurvey} from'../service/api.js';
import{Link} from 'react-router-dom';
import {getCurrentUser} from '../service/auth-api';
import 'moment-timezone';
import moment from 'moment';

const AddButton = styled(Button)`
    margin-left:9em;
    margin-top:2em;
`

const StyledTable = styled(Table)`
    width:80%;
    margin:2em auto 0 auto;
`
const Thead = styled(TableRow)`
    background: #efdc75;
   
    & > th{
         color:#015684;
         font-weight:bold;
        font-size:20px;
    }
`
const Tbody =styled(TableRow)`
   &>td{
        font-size:20px;
    }
`
    



const AllSurveys = ()=>{
    const [surveys, setSurveys]=useState([]);
   
     let userId = getCurrentUser().user.id; 
         
    useEffect(()=>{
      
        getAllSurveys();
         
    }, []); 
    const getAllSurveys = async()=>{
      
        console.log(userId);
      let response =  await getSurvey({'id':userId});
      setSurveys(response.data);
      //console.log(response.data);
    }

    const deleteSurveyDetails = async(id)=>{
        await deleteSurvey(id);
        getAllSurveys();

    }


    return(
        <>
        <AddButton variant="contained" color="success" href="./addsurvey" >
            Add Survey
        </AddButton>
        
        <StyledTable>
        
            <TableHead>
                <Thead>
                   
                    <TableCell>Survey Name</TableCell>
                    <TableCell>Start Date</TableCell>
                     <TableCell>End Date</TableCell>
                   
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    
                </Thead>
            </TableHead>
            <TableBody>
                {
                    surveys.map((survey, index)=>
                        <Tbody key={index}>
                            
                            <TableCell>{survey.name}</TableCell>
                            <TableCell>{moment(survey.startDate).utc().format('YYYY-MM-DD')}</TableCell>
                           <TableCell>{moment(survey.endDate).utc().format('YYYY-MM-DD')}</TableCell>
                           
                            <TableCell>
                                <Button variant ="contained" style={{marginRight:10}} component={Link} to={`/editsurvey/${survey._id}`}>Edit</Button>
                                <Button variant = "contained" color="secondary" onClick = {()=>deleteSurveyDetails(survey._id)} >Delete</Button>
                            </TableCell>
                        </Tbody>

                    )



                }

            </TableBody>
        </StyledTable>
    </>
    )
}
export default AllSurveys;