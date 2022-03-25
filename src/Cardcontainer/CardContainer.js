import React from "react";
import "./CardContainer.css";
import { BsCartPlusFill } from "react-icons//bs";

const CardContainer = ({ data }) => {
  console.log(data);
  const { name, price, picture } = data;
  return (
    <div className="card">
      <div className="img-container">
        <img src={picture} alt="ggfg" />
      </div>
      <div className="card-info">
        <h1>Name: {name} </h1>
        <p>Price: {price}</p>
        <div className="button">
          <button>
            Add to Cart <BsCartPlusFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
