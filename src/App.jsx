import "./App.css";
import RouterView from "./router";
import Layout from "./components/Layout/Layout";

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
