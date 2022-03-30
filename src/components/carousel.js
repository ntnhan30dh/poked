import React, { useRef } from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";

import MenuItem from "./menuItem";

const Carousel = () => {
  const intl = useIntl();
  //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const itemList =
    intl.locale === "en"
      ? [
          "Teriyaki Chicken",
          "Spicy Beef",
          "Aloha Salmon",
          "DIY Bowl",
          "New York Salad",
          "California Salad",
          "Teriyaki Chicken Salad",
          "Miu Chicken Salad",
        ]
      : [
          "Teriyaki Chicken",
          "Aloha Salmon",
          "DIY Bowl",
          "Tuna Oahu Poke",
          "New York Salad",
          "Teriyaki Chicken Salad",
          "Miu Chicken Salad",
          "Shrimp Ceviche Gohan",
        ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
      arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //centerMode: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
    ],
  };
const btnStyle ="opacity-50 hover:opacity-100 mx-24 hidden lg:block"
const arrowStyle ="w-8"
const arrow =""
  return (
    <div className="CarouselWrap flex justify-center">
      <button onClick={() => gotoPrev()} className={`  ${btnStyle} ${arrow}`}>
        <div className={arrowStyle}>
        <svg width="100%" height="auto" viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 66L16 34L48 2" stroke="#FF7CF8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </button>
      <div className="Carousel max-w-5xl ">

        <Slider {...settings} className="" ref={customeSlider}>
          {itemList.map((n) => {
            return <MenuItem name={n} />;
          })}
        </Slider>
      </div>
        <button onClick={() => gotoNext()} className={` ${btnStyle} ${arrow} `}>
        <div className={arrowStyle}>
        <svg width="100%" height="auto" viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 66L48 34L16 2" stroke="#FF7CF8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </button>
    </div>
  );
};

export default Carousel;
