import React, { useContext, useState } from "react";
import UserForm from "../../ADMIN/AddUser/UserForm";
import NavBar from "../../NavBar/NavBar";
import "./ProfilePage.css"

function ProfilePage() {
console.log("ProfilePage RENDER");
     return (
          <div className="profile-page">
               <NavBar />
               <div className="profile-form" >
                    Your Profile Details:
                    <UserForm  />
               </div>
          </div>
     );
}

export default ProfilePage;
