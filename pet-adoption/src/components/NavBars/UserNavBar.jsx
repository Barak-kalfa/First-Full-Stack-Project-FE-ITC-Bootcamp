import {Navbar, Nav, Container} from 'react-bootstrap'

function UserNavBar() {
  return (
       <div>
            <Navbar bg="primary" variant="dark">
                 <Container>
                      <Navbar.Brand href="/">Home</Navbar.Brand>
                      <Nav className="me-auto">
                           <Nav.Link href="search">Search Friend</Nav.Link>
                           <Nav.Link href="#features">View Profile</Nav.Link>
                           <Nav.Link href="#pricing">Sign Out</Nav.Link>
                      </Nav>
                 </Container>
            </Navbar>
       </div>
  );
}

export default UserNavBar