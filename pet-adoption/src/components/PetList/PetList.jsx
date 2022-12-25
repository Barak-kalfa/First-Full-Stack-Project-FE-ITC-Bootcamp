
import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect } from "react";
import { AppContext } from "../App/App";



function PetList() {
     const { petsList } = useContext(AppContext);


     

     return (
          <div>
               <SearchBar />
               <div className="d-flex flex-wrap">
                    {petsList &&
                         petsList.map((pet) => (
                              <PetCard key={uuidv4()} pet={pet} petsList ={petsList}/>
                         ))}
               </div>
          </div>
     );
}

export default PetList;
