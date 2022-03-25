import React from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";

import { useMenu, useMenuUpdate } from "./context/menuContext";
import OrderNow from "./orderNow";

const Header2 = (props) => {
  const menuState = useMenu();
  const toggleMenu = useMenuUpdate();

  let menuActive = menuState ? "is-inactive" : "";
  let change = menuState ? "change" : "";
  const link = " text-xl  w-full   text-center font-normal mb-14 ";
  const link1 = "  font-normal	  h-full  py-4";
  const span = "my-auto  text-black  hover:text-lipstick ";
  const span1 = "my-auto     h-full  ";

  return (
    <header className="headerWrapper relative z-50 w-full sticky top-0 bg-pink md:px-1/20 bg-white">
      <nav className="nav md:flex justify-between items-center  flex-row md:mx-10 xl:mx-24 md:my-4">
        <div className="md:hidden mx-auto md:ml-0 left w-28 md:w-32 lg:w-44">
          <Link to="/" className="w-full">
            <img src={logo} alt="logo" className=" w-full" />
          </Link>
        </div>
        {/* desktop */}

        <div
          className={` desktop hidden md:flex  justify-between w-full h-full  `}
          currentClassName="opacity-100 border-t-4 border-white "
        >
          <Link to="/" href="" className={link1}>
            <span className={span1}>Anchor</span>
          </Link>

          <Link to="/" href="" className={link1}>
            <span className={span1}>Anchor</span>
          </Link>

          <Link to="/" href="" className={link1}>
            <span className={span1}>Anchor</span>
          </Link>

          <div className="hidden md:block w-28 md:w-32 lg:w-44">
            <Link to="/" className=" ">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Link to="/" href="" className={link1}>
            <span className={span1}>Anchor</span>
          </Link>

          <Link to="/" href="" className={link1}>
            <span className={span1}>Anchor</span>
          </Link>

          <Link to="/" href="" className={link1}>
            <span className={span1}>
              <span className="font-bold"> Eng </span> | Esp
            </span>
          </Link>
          {/* <button className="md:hidden" >  <span className="uppercase bg-blue text-white font-bold py-4 px-6 tracking-wider"> order now </span> </button> */}
          <OrderNow padding="py-4 px-6 md:hidden" />
        </div>

        {/* mobile  */}
        <div
          className={`mobile header_rightDiv  hidden  justify-center  h-screen w-full absolute top-0 right-0 bg-green ${menuActive}`}
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
              <span className={span}>
                {" "}
                <span className="font-bold"> Eng </span> | Esp
              </span>
            </Link>
            {/* <button >  <span className="uppercase bg-blue text-white font-bold py-4 px-20 tracking-wider"> order now </span> </button> */}
            <OrderNow padding="py-4 px-20" />
          </div>
        </div>
        <div
          className={`md:hidden burgerMenu  absolute top-4 left-4  z-50 ${change}`}
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

export default Header2;
