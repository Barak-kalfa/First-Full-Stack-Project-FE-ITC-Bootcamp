import { useState } from "react";
import { Button } from "react-bootstrap";
import "../PetList/PetListCSS.css";

function SearchBar({ handleQuery, setQuery }) {
   return (
      <div className="search-bar d-flex">
         <input
            type="text"
            placeholder="Search Pet"
            onChange={(e) => setQuery(e.target.value)}
            className="search"
         />
         <Button onClick={handleQuery} />
      </div>
   );
}

export default SearchBar;
