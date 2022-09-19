import "./App.css";
import Layout from "./Components/Layout";
import { DataContextProvider } from "./Components/useContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Layout />
      </DataContextProvider>
    </div>
  );
}

export default App;
