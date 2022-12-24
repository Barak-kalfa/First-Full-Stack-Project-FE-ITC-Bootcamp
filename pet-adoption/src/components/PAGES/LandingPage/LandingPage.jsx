import React from "react";
import LoginModal from "../../LoginSignupButton/LoginModal/LoginModal";
import SignUpModal from "../../LoginSignupButton/SignUpModal/SignUpModal";
import {  Nav } from "react-bootstrap";
import "./LandingPage.css"
import RegistrationAlert from "./RegistrationAlert";

function LandingPage() {
     return (
          <div className="landing-page d-flex flex-column align-items-center pt-5">
               <h1 className="mb-5">Find a furry Friend</h1>
               <h3>
                    Matching Between Peaple
                    and Pets
               </h3>
               <h3>
                    Feel Free To Mingle
               </h3>
               <div className="mt-3">
                    <Nav.Link href="search">Search a Furry Friend</Nav.Link>
               </div>
               <div className="mt-5">
                    <LoginModal />
               </div>
               <div className="mt-5">
                    <SignUpModal />
               </div>

               <RegistrationAlert />
          </div>
     );
}

export default LandingPage;
