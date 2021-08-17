import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup  from "react-bootstrap/InputGroup";
import {connect} from 'react-redux';
import {addToDo} from '../actions'

let AddToDo = ({dispatch}) => {

 let input;
 
 
 return (
   <Form
      onSubmit = {(e) => {
       
         e.preventDefault();
         
         if(!input.value.trim()) return ;
         
         dispatch(addToDo(input.value));
         
         input.value = ''
      }}
   >
   
   <Form.Group controlId="formBasicEmail" >
        <InputGroup>
              <Form.Control
               type="text"
               placeholder="Enter an Item"
               ref = { node => { 
                   input = node
               }}
              />
              
        <InputGroup.Append>
               <Button type="submit" >Add ToDo</Button>
        </InputGroup.Append>      
        </InputGroup>
   </Form.Group>
   
   </Form>
 )

}

AddToDo = connect()(AddToDo);

export default AddToDo;