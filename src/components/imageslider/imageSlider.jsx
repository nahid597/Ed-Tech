import React, { useState, useEffect } from "react";
import "./imageSlider.scss";

function ImageSliderComponent({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5 * 1000);

    return () => {
        clearInterval(timer);
    }
  }, [currentIndex]);

  const goToNextSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const onClickGoToPrevious = (e) => {
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const onClickGoToNext = (e) => {
    e.preventDefault();
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const onClickGoToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="sliderStyles">
      <div onClick={onClickGoToPrevious} className="leftArrow">
        &lt;
      </div>
      <div onClick={onClickGoToNext} className="rightArrow">
        &gt;
      </div>
      <div style={slideStyle}></div>
      <div className="dotContainer">
        {slides.map((slide, index) => (
          <div
            onClick={() => onClickGoToSlide(index)}
            className="dotStyle"
            key={index}
          >
            &middot;
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSliderComponent;
