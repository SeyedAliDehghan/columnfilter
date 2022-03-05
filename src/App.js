import logo from "./logo.svg";
import "./App.css";
import Table from "./Components/Table/Table";
import DataContextProvider from "./Components/Context/DataContext";
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Table />
      </DataContextProvider>
    </div>
  );
}

export default App;
