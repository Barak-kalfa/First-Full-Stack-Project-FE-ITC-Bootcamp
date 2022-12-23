import UserNavBar from "../../NavBars/UserNavBar";
import UserPets from "../../USER/UserPets/UserPets";
import UserWishList from "../../USER/UserWishList/UserWishList";

function UserHome() {
     return (
          <div>
               <UserNavBar />
               <h1>Wellcom To The Pack --user full name-- </h1>
               <UserPets />
               <UserWishList />
          </div>
     );
}

export default UserHome;
