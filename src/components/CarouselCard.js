// src/components/CarouselCard.js

import React from "react";
import PropTypes from "prop-types";

//import "./CarouselCard.scss";

function CarouselCard({ item }) {
  return (
    <div id={`card-${item.id}`} className="card">
      <img src={item.imagePath300} alt={item.name} />

      <div className="details">
        <span className="index">{item.id + 1}</span>
        <h4 className="item-name">
          {item.name}
          <br />${item.price.toFixed(2)} + shipping
        </h4>
        <hr />
        <ul className="features">
          <li>
            <strong>Description: </strong>
            {item.description}
          </li>
          <br />
          <li>
            <strong>Garnishes: </strong>
            {item.garnishes ? item.garnishes : "none"}
          </li>
        </ul>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CarouselCard;
