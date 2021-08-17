import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function App() {
  return (
     <Container>
        <Row className="row">
             <Col xl={12}>
                  <h1>My funny react play ground</h1>
                  <Button>Pesh</Button>
             </Col>
        </Row>
     </Container>
  );
}

export default App;
