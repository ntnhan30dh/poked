import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { useStyle } from "./context/styleContext";
import logo from "../images/logo_footer.png";
import { Link } from "gatsby";

const Footer = () => {
  const style = useStyle();
  const intl = useIntl();

  const h4 = ` ${style.mt_sm}  mb-3`;
  return (
    <section className={`footer ${style.px}  } bg-pink1 text-white pb-14 pt-4 `} id="contact">
      <div className="top w-full lg:flex justify-between lg:mb-10 /lg:mt-14">
        <div className="w-44 lg:w-60 mx-auto lg:ml-0  ">
          <img src={logo} alt="logo" className="w-full  " />
        </div>
        <div className={`my-8 follow lg:flex items-center lg:my-auto`}>
          <div className={`${style.text.h4} my-6 lg:mr-10 lg:my-auto `}>
            {" "}
            {intl.formatMessage({ id: "Follow us on" })}
          </div>
          <div className="some ">
            <Link to="/" className="w-12  ">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7142 20.7143C13.7142 16.8483 16.8482 13.7143 20.7142 13.7143H27.2857C31.1516 13.7143 34.2857 16.8483 34.2857 20.7143V27.2857C34.2857 31.1517 31.1517 34.2857 27.2857 34.2857H20.7142C16.8482 34.2857 13.7142 31.1517 13.7142 27.2857V20.7143ZM31.7142 18C31.7142 18.9468 30.9467 19.7143 29.9999 19.7143C29.0532 19.7143 28.2857 18.9468 28.2857 18C28.2857 17.0532 29.0532 16.2857 29.9999 16.2857C30.9467 16.2857 31.7142 17.0532 31.7142 18ZM23.9999 28.2857C26.3669 28.2857 28.2857 26.3669 28.2857 24C28.2857 21.6331 26.3669 19.7143 23.9999 19.7143C21.633 19.7143 19.7142 21.6331 19.7142 24C19.7142 26.3669 21.633 28.2857 23.9999 28.2857Z"
                  fill="#FF7CF8"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`info grid grid-rows-1 grid-cols-2 lg:grid-cols-4 ${style.text.action2}`}
      >
        <div>
          <h4 className={`${style.text.h4} ${h4}`}>
            {intl.formatMessage({ id: "Countries" })}
          </h4>
          <ul>
            <li>Argentina</li>
            <li>Chile</li>
            <li>Dominican Republic</li>
            <li>Hong Kong</li>
            <li>Panamá</li>
            <li>Paraguay</li>
            <li>Uruguay</li>
            <li>Venezuela</li>
          </ul>
        </div>
        <div>
          <h4 className={`${style.text.h4} ${h4}`}>
            {intl.formatMessage({ id: "Follow us on" })}
          </h4>
          <ul>
            <li>PedidosYa</li>
            <li>Foodpanda</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h4 className={`${style.text.h4} ${h4}`}>
            {intl.formatMessage({ id: "Contact" })}
          </h4>
          <ul>
            <li>hello@pokedbowls.com</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h4 className={`${style.text.h4} ${h4}`}>
            {intl.formatMessage({ id: "Become a franchise partner" })}
          </h4>
          <ul>
            <li>sales@pokedbowls.com</li>
          </ul>
        </div>
      </div>
      <div className=" lg:hidden mt-12">
        <h4 className={`${style.text.h4} ${h4}`}>
          {intl.formatMessage({ id: "Contact" })}
        </h4>
        <ul>
          <li>hello@pokedbowls.com</li>
        </ul>
      </div>
      <div className=" lg:hidden mt-12">
        <h4 className={`${style.text.h4} ${h4}`}>
          {intl.formatMessage({ id: "Become a franchise partner" })}
        </h4>
        <ul>
          <li>sales@pokedbowls.com</li>
        </ul>
      </div>
      <div className="mt-12 lg:flex justify-between items-center">
      <div className={` ${style.text.action2}  `}>
      {intl.formatMessage({ id: " © 2022 All Rights Reserved." })}
      </div>
      <ul className="flex items-center">
        <li className="mr-2 mt-0" >
        <Link to="/imprint" className="">
        Legal
        </Link >
        
        </li>
        <li className="mr-2">
        <Link to="/privacy" className="">
        {intl.formatMessage({ id: "Privacy Policy" })}
        </Link >
          </li>
        <li>
        <Link to="/disclaimer" className="">
          {intl.formatMessage({ id: "Disclaimer" })}
        </Link >
          </li>
      </ul>
      </div>
    </section>
  );
};

export default Footer;
