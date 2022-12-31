import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState, createContext } from "react";
import { AppContext } from "../App/App";
import "./PetListCSS.css"


function PetList() {
   const { petsList } = useContext(AppContext);
   const [searchInput, setSearchInput] = useState("");
   const [listToShow, setListToShow] = useState(petsList);

   useEffect(() => {
      if (searchInput.length == 0) {
         setListToShow(petsList);
      }
   });

   const handleSearch = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
   };

   useEffect(() => {
      if (searchInput.length > 0) {
         const newList = petsList.filter((pet) => {
            return pet.name.match(searchInput);
         });
         setListToShow(newList);
      }
   }, [searchInput]);

   return (
      <div className="pet-list">
         <SearchBar handleSearch={handleSearch} searchInput={searchInput} className="search-bar"/>

         <div className="d-flex flex-wrap">
            {listToShow &&
               listToShow.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
         </div>
      </div>
   );
}

export default PetList;
