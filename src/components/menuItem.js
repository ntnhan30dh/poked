import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { useStyle } from "./context/styleContext";
import TeriyakiChickeni from "../images/menu/TeriyakiChicken.png";
import SpicyBeef from "../images/menu/SpicyBeef.png";
import AlohaSalmon from "../images/menu/AlohaSalmon.png";


const MenuItem = (props) =>{
     const style = useStyle();
     const intl = useIntl();

     const picObj = {
        "Teriyaki Chicken":TeriyakiChickeni,
        "Spicy Beef":SpicyBeef,
        "Aloha Salmon":AlohaSalmon,
        // "DIY Bowl",
        // "New York Salad",
        // "California Salad",
        // "Teriyaki Chicken Salad",
        // "Miu Chicken Salad", 
         }
const pic = picObj[props.name]?picObj[props.name]:TeriyakiChickeni
     return (
         <article className="mx-2  border-2 bg-white h-full">
         <div className={` `}>
        <img src={pic} alt={props.name} className="" />
        <div className="text p-5 md:p-8 md:p-8 text-center ">
        <h3 className={`${style.text.h2} text-green`}>{intl.formatMessage({ id: props.name })}</h3>
        <p  className={`${style.text.body2} mt-2 md:mt-3`}> {intl.formatMessage({ id: props.name+"D" })} </p>
        </div>
      </div>
         </article>
     )
 }

 export default MenuItem