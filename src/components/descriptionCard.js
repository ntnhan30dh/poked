import React from "react";
//import Plx from 'react-plx';

import {useStyle} from './context/styleContext'

import pic from "../images/palmTree.png";

const DescriptionCard = (props) => {
    const style = useStyle()

    const parallaxData = [
      {
        start: 0,
        end: 500,
        properties: [
          {
            startValue: 1,
            endValue: 2,
            property: 'scale',
          },
        ],
      },
    ];
    
  return (
    <article className={`descriptionCard ${props.article} max-w-1200px xl:mx-auto `}>
      <div className={`text md:max-w-2/3 lg:max-w-auto lg:w-1/2 mx-auto ${props.text}`}>
      <div className={`${style.text.h2} text-green my-8`}>Let yourself be taken on a food-cation with Poked, delivering the tropical taste of Hawaii’s national dish directly to you - like beach-side service.</div>
      <p className={`${style.text.body1} font-medium`}>
      Poké, which means “cut into small pieces”, features simple ingredients, but once combined and finished with toppings of your choice - that’s when the vibrant flavours really hit you! Whether a light lunch or colourful healthy dinner, you can personalise your bowl to create the perfect blend. <br /> <br />

All bowls are served with rice and paired with seafood, meat or veggies - all ready for you to tuck in! And if you close your eyes, you’ll hear the waves crash against the Hawaiian shore with every mouthful.  
      </p>
      </div>
    <div
        parallaxData={ parallaxData }
       className={`w-72 mx-auto lg:w-1/2 max-w-500px my-14`}>
        <img src={pic} alt="description" className="w-full " />
      </div>
    </article>
  );
};

export default DescriptionCard;
