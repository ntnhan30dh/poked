import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import {useStyle} from './context/styleContext'
import OrderNow from './orderNow'

import sticker from "../images/sticker.png";
import pic from "../images/cover.png";
import pic_mobile from "../images/cover_mobile.png";

const DescriptionCard2 = (props) => {
    const style = useStyle()
    const intl = useIntl();
  return (
    <div className="relative">
    <article className={`descriptionCard ${props.article} h-screen bg-cover bg-center relative flex items-center md:hidden`}style={{backgroundImage: "url(" + pic_mobile + ")"}}>
      <div className={`relative text-center  mx-4  ${props.text}`}>
      <h1 className={`${style.text.h1} text-white shadow`}>{intl.formatMessage({ id: "Story h1" })}</h1>
      <OrderNow padding=" py-4  mt-28" button="w-full  "/>
      </div>
     
    </article>
    <article className={`descriptionCard ${props.article} h-screen bg-cover bg-center relative  items-center justify-center hidden md:flex`}style={{backgroundImage: "url(" + pic + ")"}}>
    <div className=" w-1/4 max-w-409px">
            <img src={sticker} alt="sticker" className=" w-full " />
        </div>
      
    </article>
    <div class="ocean">
  <div class="wave wave_white"></div>
</div>
    </div>
  );
};

export default DescriptionCard2;
