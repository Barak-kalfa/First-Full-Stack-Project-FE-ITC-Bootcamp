import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext, useState } from "react";
import { PetContext } from "./PetCard";
import { AppContext } from "../../App/App";
import { usePetContext } from "../../../context/PetsContext";
import { useUsersContext } from "../../../context/UsersContext";
import PetAlert from "./PetAlert";

function AdoptButton() {
   const { petsList, setPetsList } = usePetContext();
   const { pet, setPetChange, petChange } = useContext(PetContext);
   const { currentUser } = useUsersContext();
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

   const adoptPet = async () => {
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
            "http://localhost:8080/pets/adopt",
            petUserId,
            { withCredentials: true }
         );
         if (res) {
            const newList = petsList;
            newList.forEach((pet) => {
               if (pet.petId === petUserId.petId) {
                  pet.ownerId = currentUser.userId;
                  pet.adoptionStatus = "Adopted";
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
         <Button variant="success" onClick={adoptPet}>
            Adopt
         </Button>
      </div>
   );
}

export default AdoptButton;
