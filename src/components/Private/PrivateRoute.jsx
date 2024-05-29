import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  let isLogged = false;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        isLogged = true;
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
}
