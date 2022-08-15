import{useEffect, useState} from 'react'
import { Button} from "@mui/material";
import{getViewSurvey, deleteSurvey} from'../service/api.js';
import{Link} from 'react-router-dom';
import 'moment-timezone';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './viewsurvey.css';

    



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
       <div   className="table-responsive">
       <table className="table table-striped table-bordered table-hover ">
       <thead className="table" >
              <tr>
              
                 <th scope="col">Survey Name</th>
                 <th scope="col">Start Date</th>
                 <th scope="col">End Date</th>
               
                 <th scope="col">Created By</th>
                 <th></th>
              </tr>
          </thead>
          <tbody>
            {
                  surveys.map((survey, index)=>
                  <tr key={index}>
                    <td>{survey.name}</td>
                            <td>{moment.utc(survey.startDate).format('YYYY-MM-DD  HH:mm A')}</td>
                            <td>{moment.utc(survey.endDate).format('YYYY-MM-DD  HH:mm A')}</td>
                            <td>{survey.userId.username}</td>
                            <td>
                                <Button variant ="contained" component={Link} to={`/takesurvey/${survey._id}`}>Take Survey</Button>
                            </td>
                    </tr>

                  )
            
            }

            </tbody>
        </table>
       </div>

       </>
        
    )
}
export default ViewSurveys;