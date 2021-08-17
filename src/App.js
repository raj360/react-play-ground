import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AddToDo from '../src/containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainter';
function App() {
  return (
     <Container>
        <Row className="row">
             <Col xl={12}>
                  <h1>To Do list</h1>
                   <AddToDo/>
                   <ToDoListContainer/>
             </Col>
        </Row>
     </Container>
  );
}

export default App;
