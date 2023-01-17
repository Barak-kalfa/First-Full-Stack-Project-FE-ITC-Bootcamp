import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import "./PetListCSS.css"
import { usePetContext } from "../../context/PetsContext";



function PetList() {
   
   const { listToShow, petsList } = usePetContext();

   return (
      <div className="pet-list">
         <SearchBar className="search-bar" />

         <div className="d-flex flex-wrap">
            {listToShow.length > 0
               ? listToShow.map((pet) => <PetCard key={uuidv4()} pet={pet} />)
               : petsList.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
         </div>
      </div>
   );
}

export default PetList;
