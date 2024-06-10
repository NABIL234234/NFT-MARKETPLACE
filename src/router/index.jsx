import { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Rankings from "../pages/Rankings";
import Wallet from "../pages/Wallet";
import Info from "../pages/Info";
import Profile from "../pages/Profile";

import Register from "../pages/Register/CreateAccount";
import Login from "../pages/Register/Login";
import ConfirmAccount from "../pages/Register/ConfirmAccount";
import Identification from "../pages/Register/Identification";
import NewPassword from "../pages/Register/NewPassword";
import SuccessChange from "../pages/Register/SuccessChange";

import CreateNft from "../pages/CreateNft/CreateNft";

import PrivateRoute from "../components/Private/PrivateRoute";

export default function RouterView() {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(false);

  
  useEffect(() => {
    const pagesWithLoading = ["/shop"]; 
    const shouldShowLoading = pagesWithLoading.includes(location.pathname);
    if (shouldShowLoading) {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
      }, 1000); 
    }
  }, [location]);

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <PrivateRoute><Shop /></PrivateRoute> },
    { path: "/rankings", element: <PrivateRoute><Rankings /></PrivateRoute> },
    { path: "/wallet", element: <PrivateRoute><Wallet /></PrivateRoute> },
    { path: "/info/:id", element: <PrivateRoute><Info /></PrivateRoute> },
    { path: "/profile/:id", element: <PrivateRoute><Profile /></PrivateRoute> },

    { path: "/createNft", element: <PrivateRoute><CreateNft /></PrivateRoute> },

    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/confirmAccount", element: <ConfirmAccount /> },
    { path: "/identification", element: <Identification /> },
    { path: "/newPassword", element: <NewPassword /> },
    { path: "/successChange", element: <SuccessChange /> },
  ]);

  return (
    <AnimatePresence exitBeforeEnter={false}>
      {showLoading && (
        <motion.div
          key="loading"
          className="flex justify-center items-center h-screen bg-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
  
          <div className="text-center text-5xl text-White">
            Loading...
          </div>
        </motion.div>
      )}
      {!showLoading && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {element}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
