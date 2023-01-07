import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext } from "react";
import { PetContext } from "./PetCard";
import { useUsersContext } from "../../../context/UsersContext";
import { usePetContext } from "../../../context/PetsContext";

function WishListButton() {
     const { pet, setPetChange, petChange } =
        useContext(PetContext);
     const { addSavedPetLocaly, userSaves } = usePetContext();

     const {currentUser} = useUsersContext()

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
               addSavedPetLocaly(pet.petId);
               setPetChange(!petChange)
          } catch (err) {
               console.log(err.message);
          }
     };

     return (
        <div>
           <Button variant="info" onClick={AddToWishList}>
              Save For Later
           </Button>
           {/* {!currentUser?.wishList.includes(pet.petId) ? (
              <Button variant="info" onClick={AddToWishList}>
                 Save For Later
              </Button>
           ) : (
              <Button> Remove From Wish List</Button>
           )} */}
        </div>
     );
}

export default WishListButton;
