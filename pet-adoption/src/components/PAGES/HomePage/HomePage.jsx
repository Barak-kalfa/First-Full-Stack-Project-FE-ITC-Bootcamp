import { useContext, useState } from "react";
import { useUsersContext } from "../../../context/UsersContext";
import { AppContext } from "../../App/App";
import NavBar from "../../NavBar/NavBar";
import "./HomePage.css"
function HomePage() {

   const { currentUser } = useUsersContext();

   return (
      <div className="HomePage">
          <NavBar />
         <h1>
            Wellcom To The Pack {currentUser?.firstName}
            {currentUser?.lastName}
         </h1>
         <h2>What Would You Like To Do?</h2>
         <div>Search Friend</div>
         <div>View Profile</div>
         <div>View My Pets</div>
      </div>
   );
}

export default HomePage;
