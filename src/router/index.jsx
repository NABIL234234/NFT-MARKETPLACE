import { useRoutes } from "react-router";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Rankings from "../pages/Rankings";
import Wallet from "../pages/Wallet";
import Info from "../pages/Info";
import Profile from "../pages/Profile";

import Register from "../pages/Register/CreateAccount";
import Login from "../pages/Register/Login";
import ConfirmAccount from "../pages/Register/ConfirmAccount"

export default function RouterView() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/rankings", element: <Rankings /> },
    { path: "/wallet", element: <Wallet /> },
    { path: "/info", element: <Info /> },
    { path: "/profile", element: <Profile /> },

    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/confirmAccount", element: <ConfirmAccount /> },
  ]);

  return element;
}
