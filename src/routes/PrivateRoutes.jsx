import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();


  if(!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
   
}
