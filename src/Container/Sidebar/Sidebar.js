import React from "react";
import "./Sidebar.css";
import SelectedItems from "../SelectedItems/SelectedItems";

const Sidebar = ({ selectedItems }) => {
  return (
    <div className="Sidebar">
      <h1>Selected Items</h1>
      {selectedItems.map((Items) => (
        <SelectedItems key={Items.id} selectedItems={Items}></SelectedItems>
      ))}

      <button>Choose One</button>
      <br />
      <button>Choose Again</button>
    </div>
  );
};

export default Sidebar;
