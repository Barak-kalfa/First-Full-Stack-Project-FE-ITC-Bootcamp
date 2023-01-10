import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import "./LandingPage.css";
import RegistrationAlert from "./RegistrationAlert";
import Footer from "../../Footer/Footer";

function LandingPage() {
   return (
      <div className="LandingPage d-flex flex-column align-items-center">
         <div className="landing-page-header">
            <img src="http://localhost:8080/petPicture-1673341023856-790645047.jpg" />
         </div>
         <div className="content-box">
            <h1>Its Simple </h1>
            <h1>Pets + People = Fun!</h1>
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
