import "./App.css";
import useFetchData from "./useFetchData";
import Loader from "./components/Loader";
import Table from "./components/Table";

function App() {
  const data = useFetchData();

  if (Object.keys(data).length === 0) {
    return <Loader />;
  }
  return <Table data={data} />;
}

export default App;

