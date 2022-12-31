import axios from "axios";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { updatePetsList } from "../../../Models/petsModels";
import { AppContext } from "../../App/App";
import "../Pets.css";
import { PetContext } from "./PetCard";

function FosterButton() {
     const { currentUser, petsList, setPetsList } = useContext(AppContext);
     const { pet, setUseButton, setPetChange, petChange } = useContext(PetContext);

     const fosterPet = async () => {
          const petUserId = {
               petId: pet.id,
               userId: currentUser.userId,
          };
          try {
               const res = await axios.put(
                    "http://localhost:8080/pets/foster",
                    petUserId
               );
               const newList = petsList;
               newList.forEach((pet) => {
                    if (pet.id === petUserId.petId) {
                         pet.fosterId = currentUser.userId;
                         pet.adoptionStatus = "Fosterd";
                    }
               });
               console.log(newList);
               setPetsList(newList);
               setUseButton((current) => !current);
               setPetChange(!petChange)
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
