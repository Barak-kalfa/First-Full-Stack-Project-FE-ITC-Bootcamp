import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import UserCard from "../UserInfo/UserCard";
import "./UsersList.css"


function UsersList() {
   const [usersList, setUsersList] = useState();

   const getUsers = async () => {
      try {
         const users = await axios.get("http://localhost:8080/users/all", {
            withCredentials: true,
         });
         setUsersList(users.data);
      } catch (err) {
         console.log(err.message);
      }
   };

   useEffect(() => {
      getUsers();
   }, []);

   return (
      <div className="UsersList">
         <table >
            <tr>
               <th>User ID</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email Address</th>
               <th>Phone Number</th>
            </tr>
            {usersList?.map((user, key) => {
               return (
                  <tr key={uuidv4()}>
                     <td>{user.userId}</td>
                     <td>{user.firstName}</td>
                     <td>{user.lastName}</td>
                     <td>{user.email}</td>
                     <td>{user.phone}</td>
                  </tr>
               );
            })}
         </table>
      </div>
   );
}

export default UsersList;

{/* <div>
   {usersList
      ? usersList.map((user) => <UserCard key={uuidv4()} user={user} />)
      : "Loading Users List"}
</div>; */}
