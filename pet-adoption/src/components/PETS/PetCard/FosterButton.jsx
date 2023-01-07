import axios from "axios";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { usePetContext } from "../../../context/PetsContext";
import { useUsersContext } from "../../../context/UsersContext";
import { updatePetsList } from "../../../Models/petsModels";
import { AppContext } from "../../App/App";
import "../Pets.css";
import { PetContext } from "./PetCard";

function FosterButton() {
   const { petsList, setPetsList } = usePetContext();
   const { currentUser } = useUsersContext();
   const { pet, setPetChange, petChange } = useContext(PetContext);

   const fosterPet = async () => {
      const petUserId = {
         petId: pet.petId,
         userId: currentUser.userId,
      };
      try {
         const res = await axios.post(
            "http://localhost:8080/pets/foster",
            petUserId
         );
         if (res) {
            const newList = petsList;
            newList.forEach((pet) => {
               if (pet.id === petUserId.petId) {
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
         <Button className="FosterButton w-100" onClick={fosterPet}>
            Foster
         </Button>
      </div>
   );
}

export default FosterButton;
