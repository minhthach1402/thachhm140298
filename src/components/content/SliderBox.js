import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assest/Images/slide1.jpg";
import img2 from "../../assest/Images/slide2.jpg";
import img3 from "../../assest/Images/slide3.jpg";
import prev from "../../assest/Images/prev.png";
import btnnext from "../../assest/Images/next.png";
import bgSlider from "../../assest/Images/bg-slider.jpg";
import "./SliderBox.css";

const SliderBox = (props) => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: true,
    autoplay: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToSroll: 1,
  };
  return (
    <div className="box_slider">
      <div className="content-slider">
        <h2>
          짧고 간단한 절차 <br />
          지금 직접 확인해보세요
        </h2>

        <div className="box_action">
          <img className="bg-slider" src={bgSlider} />
          <div>
            <button onClick={previous}>
              <img src={prev} />
            </button>
            <button onClick={next}>
              <img src={btnnext} />
            </button>
          </div>
        </div>

        <Slider ref={ref} className="slider" {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
        </Slider>

        <button className="btn_action">
          전자계약 체험하기{" "}
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SliderBox;
