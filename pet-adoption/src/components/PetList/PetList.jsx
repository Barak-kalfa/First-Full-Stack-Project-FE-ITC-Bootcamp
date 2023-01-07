import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState, createContext } from "react";
import { AppContext } from "../App/App";
import "./PetListCSS.css"
import axios from "axios";
import { usePetContext } from "../../context/PetsContext";


function PetList() {
   

   const { listToShow, petsList } = usePetContext();

   return (
      <div className="pet-list">
         <SearchBar className="search-bar" />

         <div className="d-flex flex-wrap">
            {listToShow
               ? listToShow.map((pet) => <PetCard key={uuidv4()} pet={pet} />)
               : petsList.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
         </div>
      </div>
   );
}

export default PetList;
