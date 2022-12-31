
import { v4 as uuidv4 } from "uuid";
import PetCard from "../../PETS/PetCard/PetCard";
import "../../PETS/Pets.css"

function UserPets({ userPets }) {

   return (
      <div className="user-pets-list">
         <h1>Your Pets</h1>
         {userPets?.length === 0 ? (
            <p>You Currently Have No Pets</p>
         ) : (
            userPets?.map((pet) => <PetCard key={uuidv4()} pet={pet} />)
         )}
      </div>
   );
}

export default UserPets;
