import React from "react";
import LoginModal from "../../LoginSignupButton/LoginModal/LoginModal";
import SignUpModal from "../../LoginSignupButton/SignUpModal/SignUpModal";
import {  Nav } from "react-bootstrap";

function LandingPage() {
     return (
          <div>
               <h2>Welcome to Find a furry Friend</h2>
               <div>
                    <Nav.Link href="search">Search a Furry Friend</Nav.Link>
               </div>
               <LoginModal />
               <SignUpModal />
          </div>
     );
}

export default LandingPage;
