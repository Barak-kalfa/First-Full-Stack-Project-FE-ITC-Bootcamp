import { v4 as uuidv4 } from "uuid";
import UserCard from "../UserInfo/UserCard";

function UsersList({ usersList }) {
     return (
          <div className="mt-5">
               <div>
                    {usersList&& usersList.map((user) => (
                         <UserCard key={uuidv4()} user={user} />
                    ))}
               </div>
          </div>
     );
}

export default UsersList;
