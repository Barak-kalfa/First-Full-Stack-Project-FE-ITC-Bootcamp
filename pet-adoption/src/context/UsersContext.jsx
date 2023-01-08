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
   const { getUserPets } = usePetContext();
   
   const setUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!currentUser && userId) {
         const user = await axios.get(`http://localhost:8080/users/${userId}`);
         setCurrentUser(user.data);
      }
   };

   useEffect(() => {
      setUser();
      currentUser && getUserPets(currentUser?.userId);
   },[]);

   const value = {
      currentUser,
      setCurrentUser,
      setUser,
   };

   return (
      <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
   );
}
