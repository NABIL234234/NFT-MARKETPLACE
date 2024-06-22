import React from "react";  // Ensure this is included at the top
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <GoogleOAuthProvider clientId="1028155110652-e4sidvv22e5c1096im8tf213k0ifkt6h.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);
