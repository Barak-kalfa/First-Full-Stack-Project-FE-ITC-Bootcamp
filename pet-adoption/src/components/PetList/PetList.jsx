
import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App/App";



function PetList() {
     const { petsList } = useContext(AppContext);
     const [searchInput, setSearchInput] = useState("");
     const [listToShow, setListToShow] = useState();

     const handleSearch = (e) => {
       e.preventDefault();
       setSearchInput(e.target.value);
  };

  const searchPet = ()=>{
     //  if (searchInput.length > 0) {
     //       const newList = petsList.filter((pet) => {
     //            return pet.name.match(searchInput);
     //       });
     //  }
  }

  useEffect(() => {
       if (searchInput.length > 0) {
            const newList = petsList.filter((pet) => {
                 return pet.name.match(searchInput);
            });
            setListToShow(newList);
            console.log(newList);
             
       }
       
           if (searchInput.length == 0) {
               setListToShow(petsList)
           }

  },[searchInput] );


     

     return (
          <div>
               <SearchBar
                    handleSearch={handleSearch}
                    searchPet={searchPet}
                    searchInput={searchInput}
               />
               <div className="d-flex flex-wrap">
                    {listToShow &&
                         listToShow.map((pet) => (
                              <PetCard
                                   key={uuidv4()}
                                   pet={pet}
                                   petsList={petsList}
                              />
                         ))}
               </div>
          </div>
     );
}

export default PetList;
