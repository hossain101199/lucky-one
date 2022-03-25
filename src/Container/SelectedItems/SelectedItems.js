import React from "react";
import "./SelectedItems.css";

const SelectedItems = ({ selectedItems }) => {
  const { name, picture } = selectedItems;
  return (
    <div className="selectedItems">
      <img src={picture} alt={name} />
      <h3>Name: {name}</h3>
    </div>
  );
};

export default SelectedItems;
