import { useContext } from "react";
import { PetContext } from "./PetCard";
import axios from "axios";
import { usePetContext } from "../../../context/PetsContext";

function ReturnPetButton() {
     const { petsList, setPetsList } = usePetContext()
     const { pet, setPetChange, petChange } = useContext(PetContext);

     const returnPet = async () => {
          const petId = pet.petId ;
          try {
               const res = await axios.post(
                  `http://localhost:8080/pets/${petId}/return`,
                  petId,
                  { withCredentials: true }
               );
               const newList = petsList;
               newList.forEach((pet) => {
                    if (pet.petId === petId) {
                         pet.ownerId = "";
                         pet.adoptionStatus = "Availble";
                         pet.fosterId = "";
                    }
               });
               setPetsList(newList);
               setPetChange(!petChange)
          } catch (err) {
               console.log(err.message);
          }
     };

     return (
          <div>
               <button className="pet-return-button" onClick={returnPet}>
                    Return
               </button>
          </div>
     );
}

export default ReturnPetButton;
