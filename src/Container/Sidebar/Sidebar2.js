import React from "react";
import "./Sidebar.css";

const Sidebar2 = ({ Suggesteditem }) => {
  const { picture, name } = Suggesteditem;
  return (
    <div>
      <h1>Suggested item</h1>
      <div className="selectedItems">
        <img src={picture} alt={name} />
        <h3>Name: {name}</h3>
      </div>
    </div>
  );
};

export default Sidebar2;
