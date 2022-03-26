import React from "react";
import "./Sidebar.css";
import SelectedItems from "../SelectedItems/SelectedItems";
import Sidebar2 from "./Sidebar2";

const Sidebar = ({ selectedItems, ChooseAgain, ChooseOne, Suggesteditem }) => {
  return (
    <div className="Sidebar">
      <h1>Selected Items</h1>
      {selectedItems.map((Items) => (
        <SelectedItems key={Items.id} selectedItems={Items}></SelectedItems>
      ))}

      <button onClick={() => ChooseOne(selectedItems)}>Choose One</button>
      <br />
      <button onClick={() => ChooseAgain()}>Choose Again</button>
      {Suggesteditem.map((Suggesteditem) => (
        <Sidebar2
          key={Suggesteditem.id}
          Suggesteditem={Suggesteditem}
        ></Sidebar2>
      ))}
    </div>
  );
};

export default Sidebar;
