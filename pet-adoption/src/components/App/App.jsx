import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../PAGES/LandingPage/LandingPage";
import SearchPage from "../PAGES/SearchPage/SearchPage";
import HomePage from "../PAGES/HomePage/HomePage";
import "./App.css";
import ProfilePage from "../PAGES/ProfilePage/profilePage";
import AdminPage from "../ADMIN/AdminDashboard/AdminPage";
import MyPetsPage from "../PAGES/MyPetsPage/MyPetsPage";

export const AppContext = createContext();

function App() {
     console.log("App render");
     const [petsList, setPetsList] = useState([]);

     //FOR TESTING:
     const currentUser = {
        userId: 10,
        firstName: " Leanne",
        lastName: "  Graham",
        email: "Example@april.biz",
        phone: "1-770-Example",
        bio: "This is the bio",
        wishList: ["b8a12b5c-0ce4-4033-bff0-cf77fee39659"],
        admin: true,
     };

     const addPet = (newPet) => {
          const newPetsList = [...petsList, newPet];
          setPetsList(newPetsList);
     };
     const getPetsList = async () => {
          try {
               const data = await axios.get("http://localhost:8080/pets");
               setPetsList(data.data);
          } catch (err) {
               console.log(err.message);
          }
     };

     useEffect(() => {
          getPetsList();
     }, []);

     return (
        <div className="App">
           <AppContext.Provider
              value={{
                 petsList,
                 addPet,
                 currentUser,
                 setPetsList,
              }}
           >
              <BrowserRouter>
                 <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/search" element={<SearchPage />} />( //secure
                    routes:)
                    {/* <Route
                                   path="/adminhome"
                                   element={<AdminHome />}
                              /> */}
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/mypets" element={<MyPetsPage />} />
                    <Route path="/home" element={<HomePage />} />
                 </Routes>
              </BrowserRouter>
           </AppContext.Provider>
        </div>
     );
}

export default App;
