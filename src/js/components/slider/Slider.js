import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import sliderImage from "./SliderImage";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
      prevSlide={()=>
      setActiveIndex(activeIndex < 1 ? len : activeIndex-1)
    }
    nextSlide={() =>
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }
    />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;