import axios from "axios";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App/App";
import UserPets from "../../USER/UserPets/UserPets";
import UserWishList from "../../USER/UserWishList/UserWishList";
import NavBar from "../../NavBar/NavBar";

function MyPetsPage() {
   const [toggleLists, setToggleLists] = useState(true);
   const [userPets, setUsersPets] = useState([]);
   const { currentUser } = useContext(AppContext);

   const handleToggle = () => {
      setToggleLists(!toggleLists);
   };

   // const getUsersPets = async (userId) => {
   //    try {
   //       const res = await axios.get(`http://localhost:8080/pets/${userId}`);
   //       console.log(res);
   //       setUsersPets(res);
   //       return res;
   //    } catch (err) {
   //       console.log(err);
   //    }
   // };

   // useEffect(() => {
   //    getUsersPets(currentUser?.userId);
   // }, []);

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
