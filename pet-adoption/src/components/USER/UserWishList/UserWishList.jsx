import { useContext } from "react"
import { AppContext } from "../../App/App"
import PetCard from "../../PETS/PetCard/PetCard"
import { v4 as uuidv4 } from "uuid";
import "../../PETS/Pets.css"

function UserWishList({ userPets }) {
   const { currentUser} = useContext(AppContext);

   return (
      <div className="user-wish-list">
         <h1>Your wish List </h1>
         {currentUser?.wishList.length === 0 ? (
            <p> You Wish list Is Empty</p>
         ) : (
            userPets.map((pet) => {
               if (currentUser.wishList.includes(pet.petId)) {
                  return <PetCard pet={pet} key={uuidv4()} />;
               }
            })
         )}
      </div>
   );
}

export default UserWishList