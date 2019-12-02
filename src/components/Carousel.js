// src/components/Carousel.js

import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import { cakeList } from "../utilities/lists";

const INITIAL_INDEX = 0;

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(INITIAL_INDEX);

  return (
    <div>
      <div className="page">
        <section>
          <h2>Christy's Rum Cakes Carousel</h2>
        </section>

        <button
          style={{
            borderRadius: "50%",
            width: "50px",
            padding: "5px",
            borderSpacing: "20px 5px",
            border: 0,
            backgroundColor: "white",
          }}
          onClick={() =>
            setCarouselIndex(
              carouselIndex <= 0
                ? carouselIndex + cakeList.length - 1
                : carouselIndex - 1
            )
          }
          disabled={carouselIndex <= -1}
        >
          <i className="fa fa-angle-left" style={{ fontSize: "48px" }}></i>
        </button>
        <button
          style={{
            borderRadius: "50%",
            width: "50px",
            padding: "5px",
            borderSpacing: "20px 5px",
            border: 0,
            backgroundColor: "white",
          }}
          onClick={() =>
            setCarouselIndex(
              carouselIndex >= cakeList.length - 1 ? 0 : carouselIndex + 1
            )
          }
          disabled={carouselIndex >= cakeList.length}
        >
          <i className="fa fa-angle-right" style={{ fontSize: "48px" }}></i>
        </button>

        <div className="col">
          <div className={`cards-slider active-slide-${carouselIndex}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${carouselIndex *
                  (100 / cakeList.length)}%)`,
              }}
            >
              {cakeList.map(item => (
                <CarouselCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
