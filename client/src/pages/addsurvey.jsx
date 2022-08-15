import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addSurvey } from "../service/api";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getCurrentUser } from "../service/auth-api";
import "./addsurvey.css";
import moment from "moment";


const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
let today = new Date();
let dd = today.getDate();
let MM = today.getMonth() + 1;
let yyyy = today.getFullYear();
let hh = today.getHours();
let mm = today.getMinutes(); 
if (dd < 10) {
  dd = "0" + dd;
}
if (MM < 10) {
  MM = "0" + MM;
}
today = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm;

const defaultValue = {
  name: "",
  isActive: "off",
};

function AddSurvey() {
  const [survey, setSurvey] = useState(defaultValue);
  const history = useHistory();
  const [datenow, setDateNow] = useState();

  useEffect(() => {
    document.title = `add survey`;

    setDateNow(today);
  });

  const onValueChange = (e) => {
    setSurvey({ ...survey, [e.target.name]: e.target.value });
  };

  console.log(survey);

  const addSurveyDetails = async () => {
    let userId = getCurrentUser().user.id;
    await addSurvey(survey, userId);
    history.push("/allsurvey");
  };

  return (
    <Container>
      <Typography variant="h4">Add Survey</Typography>
      <FormControl>
        <InputLabel>Survey Name</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="name"
        />
      </FormControl>
      <FormControl>
        <label>Start Date</label>
        <input
          type="datetime-local"
          name="startDate"
          onChange={(e) => {
            onValueChange(e);
          }}
          min={datenow}
          max={survey.endDate}
          value={moment(survey.startDate).format("YYYY-MM-DD HH:mm")}  
        />
      </FormControl>
      <FormControl>
        <label>End Date</label>
        <input
          type="datetime-local"
          name="endDate"
          min={survey.startDate}
          onChange={(e) => {
            onValueChange(e);
          }}
          value={moment(survey.endDate).format("YYYY-MM-DD HH:mm")}
        />
      </FormControl>
      <FormControl></FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addSurveyDetails()}>
          Add
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddSurvey;
