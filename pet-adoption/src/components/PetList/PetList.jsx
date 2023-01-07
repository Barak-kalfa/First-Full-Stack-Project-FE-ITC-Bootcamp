import SearchBar from "../SearchBar/SearchBar";
import PetCard from "../PETS/PetCard/PetCard";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState, createContext } from "react";
import { AppContext } from "../App/App";
import "./PetListCSS.css"
import axios from "axios";
import { usePetContext } from "../../context/PetsContext";


function PetList() {
   
   const { petsList } = usePetContext()
   const [query, setQuery] = useState("");
   const [queryCriterias, setQueryCriterias] = ["type"]
   const [listToShow, setListToShow] = useState(petsList);

   useEffect(() => {
      if (query.length == 0) {
         setListToShow(petsList);
      }
   });

   const handleQuery = async (e) => {
      e.preventDefault();
      // console.log(query);
      // const responseList = await axios.get(`http://localhost:8080/pets/search?query=${query}`);
      // setListToShow(responseList)
   };

   // useEffect(() => {
   //    if (query.length > 0) {
   //       const newList = petsList.filter((pet) => {
   //          return pet.name.match(query);
   //       });
   //       setListToShow(newList);
   //    }
   // }, [query]);

   return (
      <div className="pet-list">
         <SearchBar
            handleQuery={handleQuery}
            setQuery={setQuery}
            className="search-bar"
         />

         <div className="d-flex flex-wrap">
            {listToShow &&
               listToShow.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
         </div>
      </div>
   );
}

export default PetList;
