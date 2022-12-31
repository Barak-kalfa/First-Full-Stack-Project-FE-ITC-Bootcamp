import "../PetList/PetListCSS.css";

function SearchBar({ searchPet, handleSearch, searchInput }) {
   return (
      <div>
         <input
            type="text"
            placeholder="Search Pet"
            onChange={handleSearch}
            value={searchInput}
            className="search-bar"
         />
      </div>
   );
}

export default SearchBar;
