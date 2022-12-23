import React from "react";
import AdminNavBar from "../../NavBars/AdminNavBar";
import AdminDashboard from "../../ADMIN/AdminDashboard/UserPetsList/AdminDashboard";

function AdminHome() {
     return (
          <div>
               <AdminNavBar />
               <AdminDashboard />
          </div>
     );
}

export default AdminHome;
