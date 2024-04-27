import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Rankings from "../pages/Rankings";
import Wallet from "../pages/Wallet";
import Register from "../pages/Register/CreateAccount";
import Info from "../pages/Info"
import Profile from "../pages/Profile"
import { useRoutes } from "react-router";

export default function RouterView() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/rankings", element: <Rankings /> },
    { path: "/wallet", element: <Wallet /> },
    { path: "/register", element: <Register /> },
    { path: "/info", element: <Info /> },
    { path: "/profile", element: <Profile /> },
  ]);

  return element;
}
