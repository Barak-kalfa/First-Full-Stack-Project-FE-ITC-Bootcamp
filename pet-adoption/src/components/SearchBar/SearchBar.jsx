import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { usePetContext } from "../../context/PetsContext";
import "./SearchBar.css";

function SearchBar() {
   const [showFilter, setShowFilter] = useState(false);
   const [query, setQuery] = useState("");
   const { getSearchPets } = usePetContext();
   const [searchFilter] = useState({
      type: "",
      name: "",
      weight: "",
      height: "",
      adoptionStatus: ""
   });

   const handleFilter = (e) => {
      switch (e.target.name) {
         case "type":
            searchFilter.type = e.target.value;
         case "name":
            searchFilter.name = !searchFilter.name;
            break;
         case "weight":
            searchFilter.weight = !searchFilter.weight;
            break;
         case "height":
            searchFilter.height = !searchFilter.height;
            break;
         case "adoptionStatus":
            searchFilter.adoptionStatus = e.target.value;
            break;
      }
      console.log(searchFilter);
   };

   const handleQuery = async (e) => {
      const searchInput = { searchText: query, searchFields: searchFilter };
      e.preventDefault();
      getSearchPets(searchInput);
   };

   const advnacedSearch = (e) => {
      e.preventDefault();
      setShowFilter(!showFilter);
   };

   return (
      <div>
         <form>
            <div className="search-box">
               <input
                  type="text"
                  placeholder="Search Pet"
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
               />
               <button className="search-button" onClick={handleQuery}>
                  Search
               </button>
            </div>
            <div className="dropdown">
               <button onClick={advnacedSearch}>Filter</button>
               {showFilter && (
                  <div className="advanced-search">
                     <label htmlFor="type"> Type</label>
                     <select name="type" onChange={handleFilter}>
                        <option value="" defaultValue>
                           All
                        </option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="other">Other</option>
                     </select>
                     |<label htmlFor="name"> Name</label>
                     <input
                        type="checkbox"
                        name="name"
                        value="name"
                        onClick={handleFilter}
                     />
                     |<label htmlFor="weight"> Weight</label>
                     <input
                        type="checkbox"
                        name="weight"
                        value="weight"
                        onClick={handleFilter}
                     />
                     |<label htmlFor="height"> Height</label>
                     <input
                        type="checkbox"
                        name="height"
                        value="height"
                        onClick={handleFilter}
                     />
                     |<label htmlFor="adoptionStatus"> Adoption Status</label>
                     <select name="adoptionStatus" onChange={handleFilter}>
                        <option value="Availble">Availble</option>
                        <option value="Fostered">Fostered</option>
                        <option value="Adopted">Adopted</option>
                     </select>
                  </div>
               )}
            </div>
         </form>
      </div>
   );
}

export default SearchBar;

// <DropdownButton id="dropdown-basic-button" title="Advanced Search">
//    <Dropdown.Item>
//       <div className="advanced-search">
//          <input
//             type="checkbox"
//             id="name"
//             name="name"
//             value="name"
//          />
//          <label for="name"> Name</label>
//          <input
//             type="checkbox"
//             id="weight"
//             name="weight"
//             value="weight"
//          />
//          <label for="weight"> Weight</label>
//          <input
//             type="checkbox"
//             id="height"
//             name="height"
//             value="height"
//          />
//          <label for="height"> Height</label>
//          <input
//             type="checkbox"
//             id="adoption-status"
//             name="adoption-status"
//             value="adoption-status"
//          />
//          <label for="adoption-status"> Adoption Status</label>
//       </div>
//    </Dropdown.Item>
// </DropdownButton>
