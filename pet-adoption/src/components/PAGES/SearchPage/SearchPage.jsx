
import NavBar from "../../NavBar/NavBar";
import PetList from "../../PetList/PetList";
import "./SearchPageCSS.css"

function SearchPage() {
     return (
        <div className="w-100">
           <NavBar />
           <div className="search-box">
              <PetList />
           </div>
        </div>
     );
}

export default SearchPage;
