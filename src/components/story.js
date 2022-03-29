import React from "react";
import { useStyle } from "./context/styleContext";

import DescriptionCard from "./descriptionCard";
import DescriptionCard2 from "./descriptionCard2";

const Story = () =>{
    const style = useStyle();
    return (
<section className="story" id="story">
    <DescriptionCard2 article="  "  text="   "/>
    <DescriptionCard article={`${style.mx}   lg:flex  items-center`} text=" "/>
   

</section>
    )
}

export default Story;