import {connect} from 'react-redux';
import ToDoList from '../components/ToDoList';


const mapStateToProps = (state) => ({
 toDoList: state.toDoList,
});

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
