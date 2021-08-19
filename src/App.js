import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddToDo from '../src/containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainter';
import Navigation from './components/Navigation';
import {Route} from 'react-router-dom';

function App() {
  return (
     <Container>
        <Row className="row">
             <Col xl={12}>
                  <h1>To Do list</h1>
                   <Navigation/>
                   
                   <Route exact path="/"  components={ToDoListContainer} />
                   <Route exact path="/new-item"  components={AddToDo} />
                   
             </Col>
        </Row>
     </Container>
  );
}

export default App;
