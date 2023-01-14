import axios from "axios";
import { usePetContext } from "./PetsContext";

const { createContext, useContext, useEffect, useState } = require("react");

const UsersContext = createContext();

export function useUsersContext() {
   return useContext(UsersContext);
}

export function UsersProvider({ children }) {
   console.log("UsersProvider STARTS");

   const [currentUser, setCurrentUser] = useState();
   const setUser = async () => {
      const userId = localStorage.getItem("userId");
     
      if (userId) {
         try {
            const user = await axios.get(
               `http://localhost:8080/users/${userId}`,
               {
                  withCredentials: true,
               }
            );
            setCurrentUser(user.data)
            return true;
         } catch (err) {
            console.log(err);
         }
      }
   };

   useEffect(() => {
      setUser();
   }, []);

   const value = {
      currentUser,
      setCurrentUser,
      setUser,
   };
   console.log("UsersProvider ENDS");
   return (
      <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
   );
}
