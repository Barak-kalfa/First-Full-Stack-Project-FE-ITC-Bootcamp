import PetCard from "../../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import "../../PETS/Pets.css";

function UserWishList({ userSaves }) {
   return (
      <div className="user-wish-list">
         <h1>Your wish List </h1>
         {userSaves.length === 0 ? (
            <p> You Wish list Is Empty</p>
         ) : (
            userSaves.map((pet) => {
               // console.log(pet);
               return <PetCard pet={pet} key={uuidv4()} />;
            })
         )}
      </div>
   );
}

export default UserWishList;
