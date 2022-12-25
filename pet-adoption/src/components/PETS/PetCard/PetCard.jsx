import { createContext, useContext, useEffect, useState } from "react";
import AddPetForm from "../../ADMIN/AddPet/AddPetForm";
import { AppContext } from "../../App/App";
import "../Pets.css";
import AdoptButton from "./AdoptButton";
import EditPetModal from "./EditPetModal";
import FosterButton from "./FosterButton";
import PetCardModal from "./PetCardModal";
import ReturnPetButton from "./ReturnPetButton";
import WishListButton from "./WishListButton";

export const PetContext = createContext();

function PetCard({ pet }) {
     const { currentUser } = useContext(AppContext);
     const [isOwner, setIsOwner] = useState(false);
     const [useButton, setUseButton] = useState(false)

     useEffect(() => {
          if (
               pet.ownerId === currentUser.userId ||
               pet.fosterId === currentUser.userId
          ) {
               setIsOwner(true);
          }
     },[]);

     useEffect(()=>{},[useButton])

     return (
          <div className="PetCard">
               <PetContext.Provider value={{ pet, setUseButton, setIsOwner }}>
                    <img className="pet-card-img" src={pet.picture} />
                    <div className="pt-4">
                         <h6>Name: {pet.name}</h6>
                         <div>
                              {pet.adoptionStatus}
                              {isOwner && <p>By You!</p>}
                         </div>
                         {!pet.fosterId && !pet.ownerId && <FosterButton />}
                         {!pet.ownerId && <AdoptButton />}
                         {!pet.ownerId && <WishListButton />}
                         {isOwner && <ReturnPetButton />}
                         <PetCardModal />
                         {true && <EditPetModal />}
                    </div>
               </PetContext.Provider>
          </div>
     );
}

export default PetCard;
