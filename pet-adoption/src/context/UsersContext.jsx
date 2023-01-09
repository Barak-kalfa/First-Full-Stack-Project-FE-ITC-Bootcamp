import axios from "axios";
import { usePetContext } from "./PetsContext";

const { createContext, useContext, useEffect, useState } = require("react");

const UsersContext = createContext();

export function useUsersContext() {
   return useContext(UsersContext);
}

export function UsersProvider({ children }) {
   console.log("UsersProvider RENDERS");
   const [currentUser, setCurrentUser] = useState();


   useEffect(() => {
      setUser();
   }, []);


   const setUser = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
         try {

            const user = await axios.get(
               `http://localhost:8080/users/${userId}`
            );
            setCurrentUser(user.data);
            return true;
         } catch (err) {
            console.log(err);
         }
      }
   };



   const value = {
      currentUser,
      setCurrentUser,
      setUser,
   };

   return (
      <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
   );
}
