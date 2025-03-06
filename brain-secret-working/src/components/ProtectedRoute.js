import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, role }) => {
  const userRole = localStorage.getItem("userRole");
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;