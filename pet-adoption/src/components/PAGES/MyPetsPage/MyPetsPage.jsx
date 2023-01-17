import { useEffect, useState } from "react";
import UserPets from "../../USER/UserPets/UserPets";
import UserWishList from "../../USER/UserWishList/UserWishList";
import NavBar from "../../NavBar/NavBar";
import { useUsersContext } from "../../../context/UsersContext";
import { usePetContext } from "../../../context/PetsContext";
import "./MyPetsPage.css"

function MyPetsPage() {


   const [toggleLists, setToggleLists] = useState(true);
   const { currentUser } = useUsersContext()
   const { userPets, getUserPets, userSaves } = usePetContext();
   const handleToggle = () => {
      setToggleLists(!toggleLists);
   };

   useEffect(() => {
  if (currentUser)getUserPets(currentUser.userId);
   }, [currentUser]);
   

   return (
      <div className="my-pet-page">
         <NavBar />
         <button onClick={handleToggle}> Toggle Between Lists</button>
         {toggleLists ? <h1>Your Pets</h1> : <h1>Your Saved Pets</h1>}
         {toggleLists ? (
            <UserPets userPets={userPets} />
         ) : (
            <UserWishList userSaves={userSaves} />
         )}
      </div>
   );
}

export default MyPetsPage;
