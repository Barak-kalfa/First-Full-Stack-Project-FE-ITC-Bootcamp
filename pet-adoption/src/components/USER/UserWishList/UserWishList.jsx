import PetCard from "../../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import "../../PETS/Pets.css";

function UserWishList({ userSaves }) {
   return (
      <div className="user-wish-list">
         {userSaves.length === 0 ? (
            <p> No Saved Pets</p>
         ) : (
            userSaves.map((pet) => {
               return <PetCard pet={pet} key={uuidv4()} />;
            })
         )}
      </div>
   );
}

export default UserWishList;
