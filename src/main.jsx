import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <GoogleOAuthProvider clientId="148041485408-ek22dfj4qvlo0513856mcv4imkvf439c.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
