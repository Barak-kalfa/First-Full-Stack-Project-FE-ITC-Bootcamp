import PetList from "../../PetList/PetList";
import UsersList from "../UsersList/UsersList";
import AddPet from "../AddPet/AddPet";
import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../NavBar/NavBar";
import "./adminDashboard.css";

function AdminPage() {
   const [toggleLists, setToggleLists] = useState(true);
   const handleToggle = () => {
      setToggleLists(!toggleLists);
   };

   return (
      <div>
         <NavBar />
         <div className="admin-buttons">
            <AddPet />
            <button className="admin-button" onClick={handleToggle}>
               Toggle Between Lists
            </button>
         </div>
         {toggleLists ? <PetList /> : <UsersList />}
      </div>
   );
}

export default AdminPage;
