import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../App/App";
import { PetContext } from "./PetCard";

function WishListButton() {
     const { currentUser, setCurrentUser } = useContext(AppContext);
     const { pet, setUseButton, setPetChange, petChange } = useContext(PetContext);

     const AddToWishList = async () => {
          const petUserId = {
               petId: pet.id,
               userId: currentUser.userId,
          };
          console.log(petUserId);
          try {
               const res = await axios.put(
                    "http://localhost:8080/users/addtowish",
                    petUserId
               );
               setUseButton((current) => !current);
               setPetChange(!petChange)
          } catch (err) {
               console.log(err.message);
          }
     };

     const removeFromWishLise = async()=>{

     }
     return (
          <div>
             { !currentUser.wishList.includes(pet.id) ? <Button variant="info" onClick={AddToWishList}>
                    Save For Later
               </Button> : <Button> Remove From Wish List</Button>}
          </div>
     );
}

export default WishListButton;
