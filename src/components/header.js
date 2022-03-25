import React, { useState, useEffect} from "react"
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"

import logo from "../images/logo.png";
import logo_sm from "../images/logo_sm.png";

import { useMenu, useMenuUpdate } from "./context/menuContext";
import OrderNow from './orderNow'

const Header = (props) => {
  const menuState = useMenu();
  const toggleMenu = useMenuUpdate();

  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const logoSrc = scroll?logo_sm:logo

  let menuActive = menuState ? "is-inactive" : "";
  let change = menuState ? "change" : "";
  const link = " text-xl   w-full   text-center font-normal mb-14 ";
  const link1 =
    "  font-normal 	  h-full  py-4";
  const span = "my-auto    hover:text-lipstick ";
  const span1 = "my-auto  	   h-full  ";

 

  return (
    <header className="headerWrapper relative z-50 w-full sticky top-0 bg-pink  bg-white ">
      <nav className={`nav md:flex justify-between items-center  flex-row md:mx-10 xl:mx-24 py-2 `}>
        <div className="ml-4 md:ml-0 left w-28 md:w-32 lg:w-44">
          <Link to={`${locale}/`} className=" w-full ">
            <img src={logoSrc} alt="logo" className=" w-full "/>
          </Link>
        </div>
        {/* desktop */}

        <div
          className={` desktop hidden md:flex  justify-between w-3/4 h-full `}
          currentClassName="opacity-100 border-t-4 border-white "
        >
       
            <Link to="/" href="" className={link1}>
              <span className={span1}>{intl.formatMessage({ id: "Our Story" })}</span>
              
            </Link>
         
       
            <Link to="/" href="" className={link1}>
              <span className={span1}>Anchor</span>
            </Link>
         
       
            <Link to="/" href="" className={link1}>
              <span className={span1}>Anchor</span>
            </Link>
         
       
            <Link to="/" href="" className={link1}>
              <span className={span1}>Anchor</span>
            </Link>


            <Link to="/" href="" className={link1}>
              <span className={span1}>Anchor</span>
            </Link>


            <div to="/" href="" className={link1} >
       <Link to="/" className={`  ${intl.locale==="en"?"font-bold":""} `}> Eng </Link>  | <Link className={`  ${intl.locale==="es"?"font-bold":""} `} to="/es"> Esp </Link>   
            </div>
            {/* <button >  <span className="uppercase bg-blue text-white font-bold py-4 px-6 tracking-wider"> order now </span> </button> */}
            <OrderNow padding="py-4 px-6"/>
        </div>

        {/* mobile  */}
        <div
          className={`mobile header_rightDiv  hidden  justify-center  h-screen w-full absolute top-0 right-0 bg-white ${menuActive}`}
        >
          <div className=" flex flex-col md:hidden mt-20">
            <Link
              onClick={toggleMenu}
              to="/#what"
              className={link}
              activeClassName="bg-black"
            >
              <span className={span}>Anchor</span>
            </Link>
            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>Anchor</span>
            </Link>

            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>Anchor</span>
            </Link>

            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>Anchor</span>
            </Link>
            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>Anchor</span>
            </Link>
            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}> <span className="font-bold"> Eng </span>  | Esp</span>
            </Link>
            {/* <button >  <span className="uppercase bg-blue text-white font-bold py-4 px-20 tracking-wider"> order now </span> </button> */}
            <OrderNow padding="py-4 px-20"/>
          </div>
        </div>
        <div
          className={`md:hidden burgerMenu  absolute top-4 right-4 md:right-8 z-50 ${change}`}
          onClick={toggleMenu}
          onKeyDown={props.toggleMenu}
          role="button"
          tabIndex={-1}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
