import logo from "./logo.svg";
import "./App.css";
import CardContainer from "./Container/CardContainers/CardContainer";
import { useEffect, useState } from "react";
import Sidebar from "./Container/Sidebar/Sidebar";
import Nav from "./Container/Nav/Nav";

function App() {
  const [mushrooms, setMushrooms] = useState([]);
  const [selectedItems, setselectedItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMushrooms(data));
  }, []);
  const AddTocart = (data) => {
    const newItems = [...selectedItems, data];
    setselectedItems(newItems);
  };
  return (
    <div className="App">
      <Nav></Nav>
      <div className="parent-container">
        <div className="CardContainer">
          {mushrooms.map((mushroom) => (
            <CardContainer
              key={mushroom.id}
              data={mushroom}
              AddTocart={AddTocart}
            ></CardContainer>
          ))}
        </div>
        <div className="CardContainer-2">
          <Sidebar selectedItems={selectedItems}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
