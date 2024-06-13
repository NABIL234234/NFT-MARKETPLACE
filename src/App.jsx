import React from "react";  // Make sure this is the first import statement
import "./App.css";
import RouterView from "./router";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <RouterView />
      </Layout>
    </>
  );
}

export default App;
