import PetCard from "../../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import "../../PETS/Pets.css";

function UserWishList({ userSaves }) {
   return (
      <div className="user-wish-list d-flex flex-row flex-wrap">
         {userSaves.length === 0 ? (
            <p> No Saved Pets</p>
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
