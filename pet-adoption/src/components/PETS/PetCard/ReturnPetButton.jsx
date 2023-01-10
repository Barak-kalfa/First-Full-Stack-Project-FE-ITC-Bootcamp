import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { PetContext } from "./PetCard";
import axios from "axios";
import { AppContext } from "../../App/App";
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
                         pet.adoptionStatus = "";
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
               <Button variant="danger" onClick={returnPet}>
                    Return {pet.name}
               </Button>
          </div>
     );
}

export default ReturnPetButton;
