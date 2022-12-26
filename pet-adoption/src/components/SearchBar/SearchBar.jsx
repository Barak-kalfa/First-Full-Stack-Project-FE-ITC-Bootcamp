

function SearchBar({ searchPet, handleSearch, searchInput }) {
     return (
          <div>
               <input
                    type="text"
                    placeholder="Search Pet"
                    onChange={handleSearch}
                    value={searchInput}
               />
          </div>
     );
}

export default SearchBar