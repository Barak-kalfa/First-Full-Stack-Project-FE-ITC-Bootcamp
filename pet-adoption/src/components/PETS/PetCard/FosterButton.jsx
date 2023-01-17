import axios from "axios";
import { useContext, useState } from "react";
import { usePetContext } from "../../../context/PetsContext";
import { useUsersContext } from "../../../context/UsersContext";
import "../Pets.css";
import PetAlert from "./PetAlert";
import { PetContext } from "./PetCard";

function FosterButton() {
   const { petsList, setPetsList } = usePetContext();
   const { currentUser } = useUsersContext();
   const { pet, setPetChange, petChange } = useContext(PetContext);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const fosterPet = async () => {
      if (!currentUser) {
         handleShow();
         return;
      }
      const petUserId = {
         petId: pet.petId,
         userId: currentUser.userId,
      };
      try {
         const res = await axios.post(
            "http://localhost:8080/pets/foster",
            petUserId,
            { withCredentials: true }
         );
         if (res) {
            const newList = petsList;
            newList.forEach((pet) => {
               if (pet.petId === petUserId.petId) {
                  pet.fosterId = currentUser.userId;
                  pet.adoptionStatus = "Fosterd";
               }
            });

            setPetsList(newList);
            setPetChange(!petChange);
         }
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div>
         <PetAlert show={show} handleClose={handleClose} />

         <button className="pet-foster-button" onClick={fosterPet}>
            Foster
         </button>
      </div>
   );
}

export default FosterButton;
