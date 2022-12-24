
import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { AppContext } from "../App/App";
import { useEffect, useState } from 'react';
import {getPetImg} from "../../Modules/petsModules";


function PetList() {
     const { petsList } = useContext(AppContext);
     

     return (
          <div>
               <SearchBar />
               <div className="d-flex flex-wrap">
                    {petsList &&
                         petsList.map((pet) => (
                              <PetCard key={uuidv4()} pet={pet} />
                         ))}
               </div>
          </div>
     );
}

export default PetList;
