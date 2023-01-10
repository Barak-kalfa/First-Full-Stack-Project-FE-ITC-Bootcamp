import { useUsersContext } from "../../../context/UsersContext";
import NavBar from "../../NavBar/NavBar";
import PetList from "../../PetList/PetList";
import "./SearchPageCSS.css";

function SearchPage() {
   const { currentUser } = useUsersContext();
   
   return (
      <div className="Search-Page">
         <NavBar />
         {currentUser && <h1>Wellcom Back {currentUser?.firstName}</h1>}
         <PetList />
      </div>
   );
}

export default SearchPage;
