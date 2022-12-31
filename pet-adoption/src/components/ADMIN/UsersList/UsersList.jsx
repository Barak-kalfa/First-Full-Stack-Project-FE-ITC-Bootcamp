import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import UserCard from "../UserInfo/UserCard";

function UsersList() {
          const [usersList, setUsersList] = useState([]);
          async function getUsers() {
          try {
               const users = await axios.get("http://localhost:8080/users");
               setUsersList(users.data);
          } catch (err) {
               console.log(err.message);
          }
     }
     
     useEffect(() => {
          getUsers();
     }, []);

     return (
          <div className="mt-5">
               <div>
                    {usersList ?
                         usersList.map((user) => (
                              <UserCard
                                   key={uuidv4()}
                                   user={user}
                              />
                         )) : "Failed To Load Users List"}
               </div>
          </div>
     );
}

export default UsersList;
