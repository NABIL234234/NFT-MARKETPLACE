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
import CreatorsProfile from "../pages/Profile/CreatorsProfile";

import "./Spinner.scss"; // Assuming this is your spinner CSS

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
    } else {
      setShowLoading(false);
    }
  }, [location]);

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <PrivateRoute><Shop /></PrivateRoute> },
    { path: "/rankings", element: <PrivateRoute><Rankings /></PrivateRoute> },
    { path: "/wallet", element: <PrivateRoute><Wallet /></PrivateRoute> },
    { path: "/info/:id", element: <PrivateRoute><Info /></PrivateRoute> },
    { path: "/profile/:id", element: <PrivateRoute><Profile /></PrivateRoute> },
    { path: "/CreatorsProfile/:id", element: <PrivateRoute><CreatorsProfile /></PrivateRoute> },

    { path: "/createNft", element: <PrivateRoute><CreateNft /></PrivateRoute> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/confirmAccount", element: <ConfirmAccount /> },
    { path: "/identification", element: <Identification /> },
    { path: "/newPassword", element: <NewPassword /> },
    { path: "/successChange", element: <SuccessChange /> },

  ]);

  return (
    <AnimatePresence mode="wait">
      {showLoading && (
        <motion.div
          key="loading"
          className="flex justify-center items-center h-screen bg-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Smooth transition
        >
          <div className="spinner"></div>
        </motion.div>
      )}
      {!showLoading && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: -50 }} // Initial position above the screen
          animate={{ opacity: 1, y: 0 }} // Final position at the center of the screen
          exit={{ opacity: 0, y: 50 }} // Exit position below the screen
          transition={{ duration: 0.5 }} // Smooth transition
        >
          {element}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
