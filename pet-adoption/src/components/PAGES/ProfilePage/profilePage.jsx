import React, { useContext, useState } from "react";
import UserForm from "../../ADMIN/AddUser/UserForm";
import NavBar from "../../NavBar/NavBar";

function ProfilePage() {

     return (
          <div>
               <NavBar />
               <div className="d-flex justify-content-center mt-5">
                    <UserForm  />
               </div>
          </div>
     );
}

export default ProfilePage;
