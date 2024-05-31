import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  let isLogged = false;

  if (token) {
    try {
      isLogged = true;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
}
