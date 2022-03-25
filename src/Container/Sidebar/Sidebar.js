import React from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedItems }) => {
  console.log(selectedItems);
  return (
    <div className="Sidebar">
      <h1>Selected Items</h1>
      <button>Choose One</button>
      <br />
      <button>Choose Again</button>
    </div>
  );
};

export default Sidebar;
