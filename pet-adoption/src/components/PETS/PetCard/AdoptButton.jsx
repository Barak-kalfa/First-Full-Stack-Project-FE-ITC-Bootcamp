import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext } from "react";
import { PetContext } from "./PetCard";
import { AppContext } from "../../App/App";

function AdoptButton() {
const { currentUser, petsList, setPetsList } = useContext(AppContext);
const { pet, setUseButton, setPetChange, petChange } = useContext(PetContext);

      const adoptPet = async () => {
           const petUserId = {
                petId: pet.id,
                userId: currentUser.userId,
           };
           try {
                const res = await axios.put(
                     "http://localhost:8080/pets/adopt",
                     petUserId
                );
                const newList = petsList;
                newList.forEach((pet) => {
                     if (pet.id === petUserId.petId) {
                          pet.ownerId = currentUser.userId;
                          pet.adoptionStatus = "Adopted";
                     }
                });
                console.log(newList);
                setPetsList(newList);
                setPetChange(!petChange)
           } catch (err) {
                console.log(err.message);
           }
      };
     return (
          <div>
               <Button variant="success" onClick={adoptPet}>
                    Adopt
               </Button>
          </div>
     );
}

export default AdoptButton;
