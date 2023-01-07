import { useState } from "react";
import { Button } from "react-bootstrap";
import "./SearchBar.css"

function SearchBar({ handleQuery, setQuery }) {
   return (
      <div className="search-box d-flex">
         <input
            type="text"
            placeholder="Search Pet"
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
         />
         <Button className="search-button" onClick={handleQuery} > Search</Button>
      </div>
   );
}

export default SearchBar;
