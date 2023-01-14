import { useState } from "react";
import { usePetContext } from "../../context/PetsContext";
import MessageModal from "../MessageModal/MessageModal";
import "./SearchBar.css";

function SearchBar() {
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const [message, setMessage] = useState("");

   const [showFilter, setShowFilter] = useState(false);
   const [query, setQuery] = useState("");
   const { getSearchPets } = usePetContext();
   const searchFilter = {
      type: "",
      name: true,
      weight: "",
      height: "",
      adoptionStatus: "",
   };

   const handleFilter = (e) => {
      switch (e.target.name) {
         case "type":
            searchFilter.type = e.target.value;
            break;
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
      const res = await getSearchPets(searchInput);
      console.log(res);
      if (!res && query != '') {
         setMessage("No Maching Results");
         handleShow();
      }
   };

   const advnacedSearch = (e) => {
      e.preventDefault();
      setShowFilter(!showFilter);
   };

   return (
      <div>
         <MessageModal message={message} show={show} setShow={setShow} />
         <form>
            <div className="search-box">
               <input
                  type="text"
                  placeholder="Search Pet"
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
               />
               {/* <label htmlFor="type"> Type</label> */}
               <select className="type-input" name="type" onChange={handleFilter}>
                  <option value="" defaultValue>
                     Type
                  </option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
               </select>
               <button className="search-button" onClick={handleQuery}>
                  Search
               </button>
            </div>
            <div className="dropdown">
               <button onClick={advnacedSearch}>Advanced Search</button>
               {showFilter && (
                  <div className="advanced-search">
                     |<label htmlFor="name"> Name</label>
                     <input
                        type="checkbox"
                        name="name"
                        value="name"
                        onClick={handleFilter}
                        defaultChecked
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
                        <option value="">All</option>
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
