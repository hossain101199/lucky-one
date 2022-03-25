import React from "react";
import "./CardContainer.css";
import { BsCartPlusFill } from "react-icons//bs";

const CardContainer = ({ data, AddTocart }) => {
  const { name, price, picture } = data;
  return (
    <div className="card">
      <div className="img-container">
        <img src={picture} alt="ggfg" />
      </div>
      <div className="card-info">
        <h1>Name: {name} </h1>
        <p>Price: {price}</p>
      </div>

      <div className="button">
        <button onClick={() => AddTocart(data)}>
          Add to Cart <BsCartPlusFill />
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
