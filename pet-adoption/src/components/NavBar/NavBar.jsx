import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUsersContext } from "../../context/UsersContext";
import "../App/App.css";
import "./NavBarCSS.css";

function NavBar() {
   const { currentUser } = useUsersContext();
   const [toggleNav, setToggleNav] = useState(false);
   const navigate = useNavigate();

   const logOut = async (e) => {
      try {
         localStorage.clear();
         const res = await axios.get("http://localhost:8080/users/logout");
         navigate("/");
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      const userId = localStorage.getItem("userId");
      userId && setToggleNav(!toggleNav);
   }, []);

   return (
      <div className="nav-top-bar ">
         <div className="upper-bar w-100"></div>
         <Navbar className="Nav-bar w-100">
            <Navbar.Brand>
               <a href="/">
                  <img
                     alt="site logo"
                     src="http://localhost:8080/petPicture-1673173754025-604001665.jpg"
                     width="320"
                     height="70"
                     className="d-inline-block align-top "
                  />
               </a>
            </Navbar.Brand>
            <Nav className="nav-links-box">
               {toggleNav && (
                  <div className=" nav-links">
                     <Nav.Link href="search">Search |</Nav.Link>
                     <Nav.Link href="profile">My Profile |</Nav.Link>
                     <Nav.Link href="mypets">My Pets |</Nav.Link>
                     {currentUser?.isAdmin && (
                        <Nav.Link href="admin">Admin Dashboard |</Nav.Link>
                     )}
                  </div>
               )}
               {currentUser ? (
                  <Nav.Link href="/" onClick={logOut}>
                     Log Out
                  </Nav.Link>
               ) : (
                  <Nav.Link href="/">Login/Sign up</Nav.Link>
               )}
            </Nav>
         </Navbar>
      </div>
   );
}

export default NavBar;
