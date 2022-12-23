import { Navbar, Nav, Container } from "react-bootstrap";

function AdminNavBar() {
     return (
          <div>
               <Navbar bg="danger" variant="dark">
                    <Container>
                         <Navbar.Brand href="#home">
                              Admin Dasboard --User Name --
                         </Navbar.Brand>
                         <Nav className="me-auto">
                              <Nav.Link href="#pricing">Sign Out</Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>
          </div>
     );
}

export default AdminNavBar;
