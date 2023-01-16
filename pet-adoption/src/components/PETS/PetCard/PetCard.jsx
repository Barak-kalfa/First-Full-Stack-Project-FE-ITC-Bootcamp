import { createContext, useContext, useEffect, useState } from "react";
import "../Pets.css";
import PetModal from "./PetModal";
import { useUsersContext } from "../../../context/UsersContext";
import { usePetContext } from "../../../context/PetsContext";

export const PetContext = createContext();

function PetCard({ pet }) {
   const [petChange, setPetChange] = useState(false);
   const { currentUser } = useUsersContext();
   const [isOwner, setIsOwner] = useState(false);
   const {petsList} = usePetContext()

   useEffect(() => {
      if (
         pet.ownerId === currentUser?.userId ||
         pet.fosterId === currentUser?.userId
      ) {
         setIsOwner(true);
      } else {
         setIsOwner(false);
      }
   });


   return (
      <div className="PetCard">
         <PetContext.Provider
            value={{
               pet,
               setPetChange,
               petChange,
               isOwner,
            }}
         >
            <PetModal />
         </PetContext.Provider>
      </div>
   );
}

export default PetCard;
