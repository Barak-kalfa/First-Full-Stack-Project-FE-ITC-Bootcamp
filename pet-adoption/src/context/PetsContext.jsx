import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUsersContext } from "./UsersContext";

const PetsContext = createContext();

export function usePetContext() {
   return useContext(PetsContext);
}

export function PetProvider({ children }) {
   console.log("PetProvider RENDERS");
   const [petsList, setPetsList] = useState([]);
   const [userPets, setUsersPets] = useState([]);
   const [userSaves, setUserSaves] = useState([]);
   // const [searchPets, setSearchPets] = useState()
   const [listToShow, setListToShow] = useState();
   const { currentUser } = useUsersContext();
   const addPet = (newPet) => {
      const newPetsList = [...petsList, newPet];
      setPetsList(newPetsList);
   };

   const getSearchPets = async (searchInput) => {
      try {
         // const pets = await axios.get(
         //    "http://localhost:8080/pets/search",
         //    searchInput
         // );
         // setListToShow(pets);
      } catch (err) {
         console.log(err);
      }
   };

   const addSavedPetLocaly = (pet) => {
      const newSavedList = [...userSaves, pet];
      setUserSaves(newSavedList);
   };

   const removeSavedPetLocaly = (petId) => {
      const newSavedList = userSaves.filter((pet) => pet.petId !== petId);
      setUserSaves(newSavedList);
   };

   const getPetsList = async () => {
      try {
         const data = await axios.get("http://localhost:8080/pets/all", {
            withCredentials: true,
         });
         setPetsList(data.data);
      } catch (err) {
         console.log(err.message);
      }
   };

   const getUserPets = async (userId) => {
      try {
         const res = await axios.get(
            `http://localhost:8080/pets/user/${userId}`
         );
         setUsersPets(res.data.pets);
         const saveList = res.data.savedPets;
         const arr = [];
         saveList.map(async (pet) => {
            const savedPet = await axios.get(
               `http://localhost:8080/pets/${pet.petId}`
            );
            arr.push(savedPet.data[0]);
         });
         setUserSaves(arr);
         return { userPets: userPets, userSaves: userSaves };
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      getPetsList();
      if (currentUser) getUserPets();
      
   }, []);

   const value = {
      addPet,
      petsList,
      setPetsList,
      userPets,
      getUserPets,
      addSavedPetLocaly,
      userSaves,
      listToShow,
      // setSearchPets,
      getSearchPets,
      removeSavedPetLocaly,
   };

   return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
}
