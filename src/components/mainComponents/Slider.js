import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

const carruselImg = [
  "https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-1.jpg",
  "https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-2.jpg",
  "https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-3.jpg",
];

function SliderComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carruselImg.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt={"TEst"} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default SliderComponent;
