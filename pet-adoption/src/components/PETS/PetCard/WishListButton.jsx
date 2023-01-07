import Button from "react-bootstrap/Button";
import axios from "axios";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetCard";
import { useUsersContext } from "../../../context/UsersContext";
import { usePetContext } from "../../../context/PetsContext";
import "../Pets.css";

function WishListButton() {
   const { pet, setPetChange, petChange } = useContext(PetContext);
   const { addSavedPetLocaly, userSaves, removeSavedPetLocaly } =
      usePetContext();
   const [buttonState, setButtonState] = useState(true);
   const { currentUser } = useUsersContext();
   const AddToWishList = async () => {
      const petUserId = {
         petId: pet.petId,
         userId: currentUser?.userId,
      };
      try {
         const res = await axios.post(
            "http://localhost:8080/pets/save",
            petUserId
         );
         addSavedPetLocaly(pet);
         setPetChange(!petChange);
      } catch (err) {
         console.log(err.message);
      }
   };

   const removeFromWishList = async () => {
      try {
         const petUserId = {
            petId: pet.petId,
            userId: currentUser?.userId,
         };
         console.log(petUserId);
         const res = await axios.delete(
            `http://localhost:8080/pets/save/${pet.petId}/${currentUser?.userId}`
         );
         removeSavedPetLocaly(pet.petId);
         setPetChange(!petChange);
      } catch (err) {
         console.log(err.message);
      }
   };

   useEffect(()=>{
      userSaves.forEach((savedPet)=>{
         pet.petId === savedPet.petId && setButtonState(!buttonState);
      })
   },[])
   
   return (
      <div>
         {buttonState ? (
            <BsHeart className="wish-button" onClick={AddToWishList} />
         ) : (
            <BsSuitHeartFill
               className="wish-button"
               onClick={removeFromWishList}
            />
         )}
      </div>
   );
}

export default WishListButton;
