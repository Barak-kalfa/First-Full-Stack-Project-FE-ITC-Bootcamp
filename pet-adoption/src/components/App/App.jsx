import LandingPage from "../PAGES/LandingPage/LandingPage";
import SearchPage from "../PAGES/SearchPage/SearchPage";
import AdminHome from "../PAGES/AdminHome/AdminHome";
import UserHome from "../PAGES/UserHome/UserHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetPage from "../PETS/PetPage/PetPage";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import "./App.css"

export const AppContext = createContext()

function App() {
     console.log('App render');
     const [petsList, setPetsList] = useState([])
     const [currentUser, setCurrentUser] = useState()

     useEffect(()=>{
          
     setCurrentUser({
          userId: "10",
          firstName: "Example Leanne",
          lastName: " ExampleGraham",
          email: "Example@april.biz",
          phone: "1-770-Example",
          wishList: []
     });
     },[])

     const addPet = (newPet)=>{
          const newPetsList = [...petsList, newPet];
          setPetsList(newPetsList);
     }
     const getPetsList = async()=>{
          try {
               const data = await axios.get("http://localhost:8080/pets");
               setPetsList(data.data);
                  
          }catch(err){
               console.log(err.message);
          }
     }

     useEffect(()=>{
          getPetsList()
    
     },[])
     return (
          <div className="App">
               <AppContext.Provider
                    value={{
                         petsList,
                         addPet,
                         currentUser,
                         setPetsList,
                         setCurrentUser,
                    }}
               >
                    <BrowserRouter>
                         <Routes>
                              <Route path="/" element={<LandingPage />} />
                              <Route path="/search" element={<SearchPage />} />
                              ( //secure routes:)
                              <Route
                                   path="/adminhome"
                                   element={<AdminHome />}
                              />
                              <Route path="/userhome" element={<UserHome />} />
                              <Route path="/petpage" element={<PetPage />} />
                         </Routes>
                    </BrowserRouter>
               </AppContext.Provider>
          </div>
     );
}

export default App;
