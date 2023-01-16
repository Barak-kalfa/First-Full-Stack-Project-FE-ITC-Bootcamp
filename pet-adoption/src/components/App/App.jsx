import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../PAGES/LandingPage/LandingPage";
import SearchPage from "../PAGES/SearchPage/SearchPage";
import "./App.css";
import ProfilePage from "../PAGES/ProfilePage/profilePage";
import AdminPage from "../ADMIN/AdminDashboard/AdminPage";
import MyPetsPage from "../PAGES/MyPetsPage/MyPetsPage";
import { PetProvider } from "../../context/PetsContext";
import { UsersProvider } from "../../context/UsersContext";
import { PrivateRoute } from "./PrivateRoute";

function App() {
   console.log("App render");
   return (
      <div className="App">
         <UsersProvider>
            <PetProvider>
               <BrowserRouter>
                  <Routes>
                     <Route path="/" element={<LandingPage />} />
                     <Route path="/search" element={<SearchPage />} />
                     ( //secure routes:)
                     <Route
                        path="/profile"
                        element={
                           <PrivateRoute>
                              <ProfilePage />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/admin"
                        element={
                           <PrivateRoute>
                              <AdminPage />
                           </PrivateRoute>
                        }
                     />
                     <Route
                        path="/mypets"
                        element={
                           <PrivateRoute>
                              <MyPetsPage />
                           </PrivateRoute>
                        }
                     />
                  </Routes>
               </BrowserRouter>
            </PetProvider>
         </UsersProvider>
      </div>
   );
}

export default App;
