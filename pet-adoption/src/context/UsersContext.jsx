import axios from "axios";

const { createContext, useContext, useEffect, useState } = require("react");

const UsersContext = createContext();

export function useUsersContext() {
   return useContext(UsersContext);
}

export function UsersProvider({ children }) {

      const [currentUser, setCurrentUser] = useState();
 
      const setUser =  async () => {
          const userId = localStorage.getItem("userId");
         if (!currentUser && userId) {
            const user = await axios.get(`http://localhost:8080/users/${userId}`)
            setCurrentUser(user.data)
         }
      };

      useEffect(()=>{
            setUser();
      })

   const value = {
      currentUser,
      setCurrentUser,
      setUser,
   };

   return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}
