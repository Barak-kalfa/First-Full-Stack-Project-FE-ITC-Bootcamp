import {   Navigate } from "react-router-dom";

export function PrivateRoute({ redirectPath = "/", children }) {

   if (!localStorage.getItem("userId")) {
      return <Navigate to={redirectPath} replace />;
   }

   return children;
}
