import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { usePetContext } from "../../context/PetsContext";
import "./SearchBar.css";

function SearchBar() {
   
   const [searchFilter, setSearchFilter] = useState([]);
   const [showFilter, setShowFilter] = useState(false);
   const [query, setQuery] = useState("");
   const { getSearchPets } = usePetContext();

   const handleFilter = (e) => {
      if (!searchFilter.includes(e.target.value)) {
         setSearchFilter([...searchFilter, e.target.value]);
      } else {
         setSearchFilter(
            searchFilter.filter((category) => e.target.value !== category)
         );
      }
   };

      const handleQuery = async (e) => {
         const searchInput = {searchText: query, searchFields: searchFilter }
         e.preventDefault();
         getSearchPets(searchInput);
      };

      
   // useEffect(() => {
   //    if (query.length == 0) {
   //       setListToShow(petsList);
   //    }
   // });

   
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
                     <input
                        type="checkbox"
                        name="name"
                        value="name"
                        onClick={handleFilter}
                     />
                     <label htmlFor="name"> Name</label>
                     <input
                        type="checkbox"
                        name="weight"
                        value="weight"
                        onClick={handleFilter}
                     />
                     <label htmlFor="weight"> Weight</label>
                     <input
                        type="checkbox"
                        name="height"
                        value="height"
                        onClick={handleFilter}
                     />
                     <label htmlFor="height"> Height</label>
                     <input
                        type="checkbox"
                        name="adoption-status"
                        value="adoptionStatus"
                        onClick={handleFilter}
                     />
                     <label htmlFor="adoption-status"> Adoption Status</label>
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
