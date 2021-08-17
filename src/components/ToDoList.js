import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import ToDo from './ToDo';
import Jumbotron from 'react-bootstrap/Jumbotron'


const ToDoList = ({toDoList}) => {

    return (
     <Jumbotron>
         <ListGroup>
            {
             toDoList.map((todo,index)) => <ToDo key = index {...todo} />;
            }
        </ListGroup>
     </Jumbotron>
    );

};

ToDoList.PropTypes = {
 toDoList: PropTypes.arrayOf(
          PropTypes.shape({
          _id: PropTypes.number,
          title: PropTypes.string,
          }).isRequired
 ).isRequired
};

export default ToDoList;

