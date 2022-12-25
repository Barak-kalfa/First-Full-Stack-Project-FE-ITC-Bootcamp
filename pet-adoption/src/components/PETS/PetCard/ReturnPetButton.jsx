import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { PetContext } from "./PetCard";
import axios from "axios";
import { AppContext } from "../../App/App";

function ReturnPetButton() {
     const { petsList, setPetsList } = useContext(AppContext);
     const { pet, setUseButton } = useContext(PetContext);

     const returnPet = async () => {
          const petId = {petId : pet.id};
          try {
               const res = await axios.post(
                    "http://localhost:8080/pets/return",
                    petId
               );
               const newList = petsList;
               newList.forEach((pet) => {
                    if (pet.id === petId) {
                         pet.ownerId = "";
                         pet.adoptionStatus = "";
                         pet.fosterId = "";
                    }
               });
               setPetsList(newList);
               setUseButton((current) => !current);
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
