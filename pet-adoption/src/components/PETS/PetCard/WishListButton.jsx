import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../App/App";
import { PetContext } from "./PetCard";

function WishListButton() {
     const { currentUser, setCurrentUser } = useContext(AppContext);
     const { pet, setUseButton } = useContext(PetContext);

     const AddToWishList = async () => {
          const petUserId = {
               petId: pet.id,
               userId: currentUser.userId,
          };
          console.log(petUserId);
          try {
               const res = await axios.post(
                    "http://localhost:8080/users/addtowish",
                    petUserId
               );
          setUseButton((current) => !current);

          } catch (err) {
               console.log(err.message);
          }
     };

     return (
          <div>
               <Button variant="info" onClick={AddToWishList}>
                    Save For Later
               </Button>
          </div>
     );
}

export default WishListButton;
