import logo from "./logo.svg";
import "./App.css";
import CardContainer from "./Container/CardContainers/CardContainer";
import { useEffect, useState } from "react";
import Sidebar from "./Container/Sidebar/Sidebar";
import Nav from "./Container/Nav/Nav";

function App() {
  // .......................................................................
  const [mushrooms, setMushrooms] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMushrooms(data));
  }, []);
  // .......................................................................
  const [selectedItems, setselectedItems] = useState([]);
  const AddTocart = (data) => {
    const newItems = [...selectedItems, data];
    setselectedItems(newItems);
  };
  const ChooseAgain = () => {
    setselectedItems([]);
  };
  // .......................................................................
  const [Suggesteditem, setSuggesteditem] = useState([]);
  const getRendomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  };
  const ChooseOne = (data) => {
    let index = getRendomNumber(0, data.length - 1);
    const Newdata = data[index];
    setSuggesteditem([Newdata]);
  };
  // .............................................................................
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
          <Sidebar
            selectedItems={selectedItems}
            ChooseOne={ChooseOne}
            ChooseAgain={ChooseAgain}
            Suggesteditem={Suggesteditem}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
