import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getViewSurvey, deleteSurvey} from'../service/api.js';
import{Link} from 'react-router-dom';
import 'moment-timezone';
import moment from 'moment';


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
    



const ViewSurveys = ()=>{
    const [surveys, setSurveys]=useState([]);
  

    useEffect(()=>{
        getAllSurveys();
    }, []);
    const getAllSurveys = async()=>{
      let response =  await getViewSurvey();
      setSurveys(response.data);
      //console.log(response.data);
    }

    const deleteSurveyDetails = async(id)=>{
        await deleteSurvey(id);
        getAllSurveys();

    }


    return(
        <>
        
        
        <StyledTable>
        
            <TableHead>
                <Thead>
                   
                    <TableCell>Survey Name</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Created By</TableCell>
                    <TableCell></TableCell>
                    
                </Thead>
            </TableHead>
            <TableBody>
                {
                    surveys.map((survey, index)=>
                        <Tbody key={index}>
                           
                            <TableCell>{survey.name}</TableCell>
                            <TableCell>{moment.utc(survey.startDate).format('YYYY-MM-DD')}</TableCell>
                            <TableCell>{moment.utc(survey.endDate).format('YYYY-MM-DD')}</TableCell>
                            <TableCell>{survey.userId.username}</TableCell>
                            <TableCell>
                                <Button variant ="contained" style={{marginRight:10}} component={Link} to={`/takesurvey/${survey._id}`}>Take Survey</Button>
                               
                            </TableCell>
                        </Tbody>

                    )



                }

            </TableBody>
        </StyledTable>
    </>
    )
}
export default ViewSurveys;