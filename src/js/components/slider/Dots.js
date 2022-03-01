import React from "react";
function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div classname="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          classname={'${activeIndex == index ? "dot active-dot" : "dot"}'}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;