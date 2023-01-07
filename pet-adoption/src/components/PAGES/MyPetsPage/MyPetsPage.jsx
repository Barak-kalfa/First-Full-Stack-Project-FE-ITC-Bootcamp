import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import UserPets from "../../USER/UserPets/UserPets";
import UserWishList from "../../USER/UserWishList/UserWishList";
import NavBar from "../../NavBar/NavBar";
import { useUsersContext } from "../../../context/UsersContext";
import { usePetContext } from "../../../context/PetsContext";

function MyPetsPage() {
   // console.log("MyPetsPage Render");

   const [toggleLists, setToggleLists] = useState(true);
   const { currentUser } = useUsersContext()
   const { userPets, getUserPets, userSaves } = usePetContext();

   const handleToggle = () => {
      setToggleLists(!toggleLists);
   };

   useEffect(() => {
      currentUser && getUserPets(currentUser?.userId);
   }, [currentUser]);

   return (
      <div>
         <NavBar />
         <Button onClick={handleToggle}> Toggle Between Lists</Button>
         {toggleLists ? (
            <UserPets userPets={userPets} />
         ) : (
            <UserWishList userPets ={userPets}/>
         )}
      </div>
   );
}

export default MyPetsPage;
