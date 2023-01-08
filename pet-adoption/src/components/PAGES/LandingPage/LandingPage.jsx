import React from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { Nav } from "react-bootstrap";
import "./LandingPage.css";
import RegistrationAlert from "./RegistrationAlert";
import Footer from "../../Footer/Footer";
import { usePetContext } from "../../../context/PetsContext";

function LandingPage() {
   return (
      <div className="LandingPage d-flex flex-column align-items-center">
         <div className="landing-page-header">
            <h1>Furry Friends</h1>
         </div>
         <div className="content-box">
            <h1>Welcome </h1>
            <h1>Add more text </h1>
            <div className="buttons-box">
               <LoginModal />
               <RegistrationAlert />
               <SignUpModal />
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default LandingPage;
