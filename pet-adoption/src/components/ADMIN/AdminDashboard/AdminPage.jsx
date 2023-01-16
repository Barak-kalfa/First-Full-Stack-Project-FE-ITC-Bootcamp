import { useState, useEffect } from "react";
import axios from 'axios'
import PetList from "../../PetList/PetList";
import UsersList from "../UsersList/UsersList";
import AddPet from "../AddPet/AddPet";

import NavBar from "../../NavBar/NavBar";
import "./adminDashboard.css";

function AdminPage() {
   const [toggleLists, setToggleLists] = useState(true);
   const [usersList, setUsersList] = useState();

   const handleToggle = () => {
      setToggleLists(!toggleLists);
   };

   const getUsers = async () => {
      console.log("xxxxx");
      try {
         const users = await axios.get("http://localhost:8080/users/all", {
            withCredentials: true,
         });
         setUsersList(users.data);
      } catch (err) {
         console.log(err.message);
      }
   };

   useEffect(() => {
      getUsers();
   }, []);

   return (
      <div>
         <NavBar />
         <div className="admin-buttons">
            <AddPet />
            {toggleLists ? <h1>Pets List</h1> : <h1>Users List</h1>}
            <button className="admin-button" onClick={handleToggle}>
               Toggle Between Lists
            </button>
         </div>
         {toggleLists ? <PetList /> : <UsersList usersList={usersList} />}
      </div>
   );
}

export default AdminPage;
