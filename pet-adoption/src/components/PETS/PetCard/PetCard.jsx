import { createContext, useContext, useEffect, useState } from "react";
import "../Pets.css";
import PetModal from "./PetModal";

export const PetContext = createContext();

function PetCard({pet}) {
         const [petChange, setPetChange] = useState(false);
     return (
          <div className="PetCard">
               <PetContext.Provider
                    value={{
                         pet,
                         setPetChange,
                         petChange,
                    }}
               >
                    <PetModal />
               </PetContext.Provider>
          </div>
     );
}

export default PetCard;
