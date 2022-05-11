import { Col, Container, Navbar, Nav} from 'react-bootstrap';

function Header() {
  return (
    <Container className='wrapper_block p-0' fluid md='4'>
      <Col className='colors'>
        <Navbar bg="dark" variant="dark" className='p-2'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Container>
  );
}

export default Header;

