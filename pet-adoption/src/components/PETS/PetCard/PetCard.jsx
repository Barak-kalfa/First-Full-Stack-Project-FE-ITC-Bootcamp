import { createContext } from "react";
import "../Pets.css"
import AdoptButton from './AdoptButton';
import FosterButton from './FosterButton';
import PetCardModal from './PetCardModal';
import WishListButton from './WishListButton';

export const PetContext = createContext()

function PetCard({ pet, petImg }) {

          const x = "hello"
          const handleClick = (e) => {
               console.log(e.target.id);
          };
     return (
          <div className="PetCard">
               <PetContext.Provider value={{ pet }}>
                    <img className="pet-card-img" src={pet.picture} />
                    <div className="pt-4">
                         <h6>Name: {pet.name}</h6>
                         <div>{pet.adoptionStatus}</div>
                         {!pet.fosterId && <FosterButton />}
                         <AdoptButton />
                         <WishListButton />
                         <PetCardModal pet={pet} petImg={petImg} />
                    </div>
               </PetContext.Provider>
          </div>
     );
}

export default PetCard