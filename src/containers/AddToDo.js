import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup  from "react-bootstrap/InputGroup";
import { addTodo } from "../actions";
import {connect} from 'react-redux';

const AddToDo = ({dispatch}) => {

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
   
   </Form>
 )

}

AddToDo = connect()(AddToDo);

export default AddToDo;