import PetList from "../../PetList/PetList";
import UsersList from "../UsersList/UsersList";
import AddPet from "../AddPet/AddPet";
import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../NavBar/NavBar";

function AdminPage() {
     const [toggleLists, setToggleLists] = useState(true);
     const handleToggle = () => {
          setToggleLists(!toggleLists);
     };

     return (
        <div>
           <NavBar />
           <AddPet />
           <div>
              <Button onClick={handleToggle}>Toggle Between Lists</Button>
              {toggleLists ? <PetList /> : <UsersList />}
           </div>
        </div>
     );
}

export default AdminPage;
