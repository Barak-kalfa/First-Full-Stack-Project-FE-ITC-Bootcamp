import { Navbar, Nav, Container } from "react-bootstrap";
import "../App/App.css";
import "./NavBarCSS.css"

function NavBar() {
     return (
          <div className="NavBar">
               <Navbar>
                    <Container>
                         <Navbar.Brand href="/home">Home</Navbar.Brand>
                         <Nav className="me-auto">
                              <Nav.Link href="search">Search A Friend</Nav.Link>
                              <Nav.Link href="profile">View Profile</Nav.Link>
                              <Nav.Link href="admin">Admin Dashboard</Nav.Link>
                              <Nav.Link href="#pricing">Sign Out</Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>
          </div>
     );
}

export default NavBar;
