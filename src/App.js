import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddToDo from '../src/containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainter';
import {Route} from 'react-router-dom';
import NavigationContainer from './containers/NavigationContainer';



function App() {

  return (
     <Container>
        <Row className="row">
             <Col xl={12}>
                  <h1>To Do App</h1>
                  <NavigationContainer />
                  
                   <div className="p-2">
                     <Route exact path="/"  component={ToDoListContainer} />
                      <Route  path="/new-item"  component={AddToDo} /> 
                   </div> 
             </Col>
        </Row>
     </Container>
  );
}

export default App;
