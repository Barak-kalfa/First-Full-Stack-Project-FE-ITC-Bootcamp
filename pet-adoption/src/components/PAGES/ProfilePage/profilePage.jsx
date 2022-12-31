import React, { useContext, useState } from "react";
import { AppContext } from "../../App/App";
import UserForm from "../../ADMIN/AddUser/UserForm";
import NavBar from "../../NavBar/NavBar";

function ProfilePage() {
     const { currentUser } = useContext(AppContext);
     console.log(currentUser);
     return (
          <div>
               <NavBar />
               <div className="d-flex justify-content-center mt-5">
                    <UserForm user={currentUser} />
               </div>
          </div>
     );
}

export default ProfilePage;
