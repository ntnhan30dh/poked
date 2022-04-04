import * as React from "react";

// styles
import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "semantic-ui-css/semantic.min.css";

import { MenuProvider } from "../components/context/menuContext";
import { StyleProvider } from "../components/context/styleContext";

import Header from "../components/header";
import Footer from "../components/footer";
import Story from "../components/story";
import Menu from "../components/menu";
import IG from "../components/ig";

const IndexPage = () => {
  return (
    <main className="overflow-x-hidden">
      <title>Poked</title>
      < StyleProvider> 
      <MenuProvider>
        <Header />
      </MenuProvider>
    <Story/>  
    <Menu type={1}/>
    <IG/>  
    <Footer/>  
  </StyleProvider>
    </main>
  );
};

export default IndexPage;
