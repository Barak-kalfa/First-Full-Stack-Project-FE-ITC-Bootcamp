import React from "react";
import LoginModal from "../../LoginSignupButton/LoginModal";
import SignUpModal from "../../LoginSignupButton/SignUpModal";
import { Nav } from "react-bootstrap";
import "./LandingPage.css";
import RegistrationAlert from "./RegistrationAlert";

function LandingPage() {
   return (
      <div className="LandingPage">
         <div className="bar"></div>
         <h1 className="title">Find a Furry Friend</h1>
         <h3 className="subtitle">Matching Between Peaple and Pets</h3>
         <div className="mt-3"></div>
         <div className="m-5 d-flex justify-content-around w-75">
            <LoginModal />
            <RegistrationAlert />
            <SignUpModal />
         </div>
         <div className="bar"></div>
      </div>
   );
}

export default LandingPage;
