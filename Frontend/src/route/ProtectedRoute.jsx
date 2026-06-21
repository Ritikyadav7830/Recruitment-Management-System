import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated );  
  // console.log(isAuthenticated)


  if (!isAuthenticated) {
    return <Navigate to="/adminlogin" />;
  }

  return children;
}

export default ProtectedRoute;