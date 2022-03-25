import logo from "./logo.svg";
import "./App.css";
import CardContainer from "./Cardcontainer/CardContainer";
import { useEffect, useState } from "react";
import Sidebar from "./Cardcontainer/Sidebar/Sidebar";

function App() {
  const [mushrooms, setMushrooms] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMushrooms(data));
  }, []);
  return (
    <div className="App">
      <h1>Healthy Health</h1>
      <div className="parent-container">
        <div className="CardContainer">
          {mushrooms.map((mushroom) => (
            <CardContainer key={mushroom.id} data={mushroom}></CardContainer>
          ))}
        </div>
        <div className="CardContainer-2">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
