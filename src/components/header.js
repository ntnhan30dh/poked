import React, { useState, useEffect} from "react"
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"

import logo from "../images/logo.png";

import { useMenu, useMenuUpdate } from "./context/menuContext";
import {useStyle} from './context/styleContext'
import OrderNow from './orderNow'

const Header = (props) => {
  const menuState = useMenu();
  const toggleMenu = useMenuUpdate();
  const style = useStyle()

  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const logoSrc = logo

  let menuActive = menuState ? "is-inactive" : "";
  let change = menuState ? "change" : "";
  const link = "   w-full   text-center /font-normal mb-14 ";
  const link1 =
    "  /font-normal 	  h-full  py-4";
  const span = "  my-auto hover:text-lipstick ";
  const span1 = "my-auto  h-full";

 

  return (
    <header className="headerWrapper relative z-50 w-full sticky top-0 bg-pink2 text-green text-18px uppercase font-medium ">
      <nav className={`nav relative z-20 md:flex justify-between items-center  flex-row ${style.mx} py-4 `}>
        <div className="left w-40 md:w-56">
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
              <span className={span1}>{intl.formatMessage({ id: "Menu" })}</span>
            </Link>
         
       
            <Link to="/" href="" className={link1}>
              <span className={span1}>{intl.formatMessage({ id: "Follow Us" })}</span>
            </Link>


            <Link to="/" href="" className={link1}>
              <span className={span1}>{intl.formatMessage({ id: "Contact" })}</span>
            </Link>


            <div to="/" href="" className={link1} >
       <Link to="/" className={`  ${intl.locale==="en"?"font-bold":""} `}> En </Link>  | <Link className={`  ${intl.locale==="es"?"font-bold":""} `} to="/es"> Es </Link>   
            </div>
            <OrderNow padding="py-4 px-6"/>
        </div>

        {/* mobile  */}
        <div
          className={` mobile header_rightDiv relative z-10  hidden  justify-center  h-screen w-full absolute top-0 right-0 bg-pink2 ${menuActive}`}
        >
          <div className=" flex flex-col md:hidden mt-20 ">
            <Link
              onClick={toggleMenu}
              to="/#story"
              className={link}
              activeClassName="bg-black"
            >
              <span className={span}>{intl.formatMessage({ id: "Our Story" })}</span>
            </Link>
            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}> {intl.formatMessage({ id: "Menu" })} </span>
            </Link>

            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}> {intl.formatMessage({ id: "Follow Us" })} </span>
            </Link>

            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>{intl.formatMessage({ id: "Contact" })}</span>
            </Link>

            <div to="/" href="" className={link} >
       <Link to="/" className={`  ${intl.locale==="en"?"font-bold":""} `}> En </Link>  | <Link className={`  ${intl.locale==="es"?"font-bold":""} `} to="/es"> Es </Link>   
            </div>
            <OrderNow padding="py-4 px-20"/>
          </div>
        </div>
        <div
          className={`md:hidden burgerMenu  absolute top-5 right-5 md:right-8 z-50 ${change}`}
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
