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
import { PetProvider } from "../../context/PetsContext";
import { UsersProvider } from "../../context/UsersContext";
import Test from "../Test";
import HeaderBar from "../HeaderBar/HeaderBar";
import NavBar from "../NavBar/NavBar";

function App() {
   console.log("App render");


   return (
      <div className="App">
         <PetProvider>
            <UsersProvider>
               {/* {true && <NavBar />} */}
                  <BrowserRouter>
                     <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        ( //secure routes:)
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/mypets" element={<MyPetsPage />} />
                     </Routes>
                  </BrowserRouter>
            </UsersProvider>
         </PetProvider>
      </div>
   );
}

export default App;
