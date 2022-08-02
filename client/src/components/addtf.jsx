import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {  useParams } from "react-router-dom";
import{addTfQuestion} from "../service/api";

const defaultValue={
  statement:''
  
}


function AddTf() {
    const [show, setShow] = useState(false);
    const {id} = useParams();
    console.log('id',id)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [tfQuestion, setTfQuestion] = useState(defaultValue);

    
    const onValueChange=(e)=>{
      //console.log(e.target.name, e.target.value)
      setTfQuestion(e.target.value);
       console.log(tfQuestion);
   }

   
   const addTfDetails=async()=>{
    let data = {
      "statement":tfQuestion,
       "surveyId":id
    }
    console.log(data);
    await addTfQuestion(data);
    handleClose();
    window.location.reload();
 }

  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Add Question
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
             
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>please input your question</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e)=>{onValueChange(e)}}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{addTfDetails()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default AddTf;
