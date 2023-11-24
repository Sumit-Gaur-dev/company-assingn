import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    const dataFromDB = await response.json();
    setData(dataFromDB.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App ">
      <Navbar />
      {/* className(container) is just for reference here */}
      <div className=" flex justify-center w-full ">
        {data.map((items) => (
          <Card key={items.index} data={items} />
        ))}
      </div>
    </div>
  );
}

export default App;
