import { Navbar, Nav, Container } from "react-bootstrap";
import { useUsersContext } from "../../context/UsersContext";
import "../App/App.css";
import "./NavBarCSS.css"

function NavBar() {
   const {currentUser} = useUsersContext()
     return (
        <div className="Nav-bar">
           <Navbar className="w-100">
              <Container>
                 <Navbar.Brand>
                    <img
                       alt=""
                       src="../images/logo.jpg"
                       width="30"
                       height="30"
                       className="d-inline-block align-top"
                    />
                 </Navbar.Brand>
                 <Nav className="me-auto nav-links">
                    <Nav.Link href="search">Search</Nav.Link>
                    <Nav.Link href="profile">View Profile</Nav.Link>
                    <Nav.Link href="mypets">My Pets</Nav.Link>
                    {currentUser?.isAdmin && (
                       <Nav.Link href="admin">Admin Dashboard</Nav.Link>
                    )}
                    {currentUser ? (
                       <Nav.Link href="#pricing">Log Out</Nav.Link>
                    ) : (
                       <Nav.Link href="/">Login/Sign up</Nav.Link>
                    )}
                 </Nav>
              </Container>
           </Navbar>
        </div>
     );
}

export default NavBar;
