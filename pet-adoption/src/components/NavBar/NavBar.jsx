import { Navbar, Nav, Container } from "react-bootstrap";
import { useUsersContext } from "../../context/UsersContext";
import { cookies, remove } from "react-cookie";
import axios from "axios";
import "../App/App.css";
import "./NavBarCSS.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
   const { currentUser } = useUsersContext();
   const navigate = useNavigate();
   const logOut = async(e) => {
      try {
         localStorage.clear();
         const res = await axios.get('http://localhost:8080/users/logout')
         navigate("/profile");
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <div className="Nav-bar">
         <div className="upper-bar"></div>
         <Navbar className="w-100 ps-5">
            {`${currentUser?.firstName} ${currentUser?.lastName}`}
            <Container className="nav-container ">
               <Navbar.Brand>
                  <a href="/">
                     <img
                        alt=""
                        src="http://localhost:8080/petPicture-1673173754025-604001665.jpg"
                        width="320"
                        height="70"
                        className="d-inline-block align-top "
                     />
                  </a>
               </Navbar.Brand>
               <Nav className="me-auto nav-links">
                  <Nav.Link href="search">Search</Nav.Link>
                  <Nav.Link href="profile">View Profile</Nav.Link>
                  <Nav.Link href="mypets">My Pets</Nav.Link>
                  {currentUser?.isAdmin && (
                     <Nav.Link href="admin">Admin Dashboard</Nav.Link>
                  )}
                  {currentUser ? (
                     <Nav.Link href="/" onClick={logOut}>
                        Log Out
                     </Nav.Link>
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
