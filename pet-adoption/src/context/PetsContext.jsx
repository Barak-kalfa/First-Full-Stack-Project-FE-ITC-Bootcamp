import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUsersContext } from "./UsersContext";

const PetsContext = createContext();

export function usePetContext() {
   return useContext(PetsContext);
}

export function PetProvider({ children }) {
   const [petsList, setPetsList] = useState([]);
   const [userPets, setUsersPets] = useState([]);
   const [userSaves, setUserSaves] = useState([])

   const addPet = (newPet) => {
      const newPetsList = [...petsList, newPet];
      setPetsList(newPetsList);
   };

   const addSavedPetLocaly = (newSave) => {
      const newSavedList = [...userSaves, newSave];
      setUserSaves(newSavedList);
   };

   const getPetsList = async () => {
      try {
         const data = await axios.get("http://localhost:8080/pets/all");
         setPetsList(data.data);
      } catch (err) {
         console.log(err.message);
      }
   };

   useEffect(() => {
      getPetsList();
   }, []);

   const getUserPets = async (userId) => {
      try {
         const res = await axios.get(`http://localhost:8080/pets/user/${userId}`);
         setUsersPets(res.data.pets);

         const saveList = res.data.savedPets;
         saveList.map(async(pet) =>{
            const savedPet = await axios.get(`http://localhost:8080/pets/${pet.petId}`);
            setUserSaves([...userSaves, savedPet.data]);
         })
         return 
      
      } catch (err) {
         console.log(err);
      }
   };

   // useEffect(() => {
   //    getUserPets(currentUser?.userId);
   // }, []);

   const value = {
      addPet,
      petsList,
      setPetsList,
      userPets,
      getUserPets,
      addSavedPetLocaly,
      userSaves,
   };

   return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
}
