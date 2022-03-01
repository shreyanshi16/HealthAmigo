import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div className="carousel">
          <div className="carouselInner">
            <div
              key={index}
              className={index == activeIndex ? "slides active" : "inactive"}
            >
              <p className="title">{slide.title}</p>
              <img src={slide.img} alt="" />
              <p className="subtitle">{slide.subtitle1}</p>
              <p className="subtitle">{slide.subtitle2}</p>
              <div className="btn">
                <button className="button">Get Started</button>
                <p className="link">Go to Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;