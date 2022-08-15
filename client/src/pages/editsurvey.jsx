import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getThisSurvey, editSurvey } from "../service/api";
import { useParams } from "react-router-dom";
import AddTf from "../components/addtf.jsx";
import DisplayQuestion from "../components/displayquestion.jsx";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultValue = {
  name: "",
};
let today = new Date();
let dd = today.getDate();
let MM = today.getMonth() + 1;
let yyyy = today.getFullYear();
let HH = today.getHours();
let mm = today.getMinutes();
if (dd < 10) {
  dd = "0" + dd;
}
if (MM < 10) {
  MM = "0" + MM;
}
today = yyyy + "-" + MM + "-" + dd + " " + HH + ":" + mm;

const EditSurvey = () => {
  const [survey, setSurvey] = useState(defaultValue);
  const [datenow, setDateNow] = useState();

  useEffect(() => {
    document.title = `edit survey`;

    setDateNow(today);
  });

  const { id } = useParams();

  useEffect(() => {
    loadSurveyDetails();
  }, []);

  const loadSurveyDetails = async () => {
    const response = await getThisSurvey(id);
    setSurvey(response.data);
  };

  const onValueChange = (e) => {
    //console.log(e.target.name, e.target.value)
    setSurvey({ ...survey, [e.target.name]: e.target.value });
    // console.log(user);
  };
  // console.log(survey.isActive);

  const editSurveyDetails = async () => {
    //aler("edit success!");
    await editSurvey(survey, id);
    alert("edit success!");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Survey</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="name"
          value={survey.name}
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

      <Button
        variant="contained"
        color="success"
        onClick={() => editSurveyDetails()}
      >
        Edit Survey
      </Button>
      <AddTf />
      <DisplayQuestion />
    </Container>
  );
};

export default EditSurvey;
