import React from "react";
import {useStyle} from './context/styleContext'

import logo from "../images/logo_footer.png";
import logoMobile from "../images/logo_footer__mobile.png";
import fb from "../images/footer/fb.png";
import ig from "../images/footer/ig.png";
import twitter from "../images/footer/twitter.png";
import snapchat from "../images/footer/snapchat.png";
import { Link } from "gatsby";

const Footer = () => {
  const style = useStyle()
  const soMe = (img) => {
    return (
      <Link to="/" className="w-12 mr-5 md:mr-auto md:ml-5 ">
        <img src={img} alt="logo" className="w-full " />
      </Link>
    );
  };

  const soMeList = [fb,ig,twitter,snapchat]
  const h4= ` ${style.mt_sm}  mb-3`
  return (
    <section className={`footer ${style.mx}  ${style.my} `}>
      <div className="top w-full md:flex justify-between md:mb-10 md:mt-14">
        <div className="w-full md:w-28 ">
          <Link to="/" className="w-full ">
            <img src={logo} alt="logo" className="w-full hidden md:block" />
            <img
              src={logoMobile}
              alt="logo"
              className="w-full md:hidden "
            />
          </Link>
        </div>
        <div className={`my-8 follow md:flex items-center md:my-auto`}>
          <h4 className={`${style.text.h4} my-6 md:mr-10`}>
            {" "}
            Follow us on
          </h4>
          <div className="some flex /md:justify-end">
          {soMeList.map(s=>soMe(s))}
          </div>
        </div>
        </div>
        <div className={`info grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 ${style.text.action2}`}>
          <div>
            <h4 className={`${style.text.h4} ${h4}`}>Info column</h4>
            <ul>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
            </ul>
          </div>
          <div>
          <h4 className={`${style.text.h4} ${h4}`}>Info column</h4>
            <ul>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
            </ul>
          </div>
          <div>
          <h4 className={`${style.text.h4} ${h4}`}>Info column</h4>
            <ul>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
            </ul>
          </div>
          <div>
          <h4 className={`${style.text.h4} ${h4}`}>Info column</h4>
            <ul>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
              <li>
              Info item
              </li>
            </ul>
          </div>

        </div>
        <p className={` ${style.text.action2} ${style.mt_md} `}>
        © 2022 All Rights Reserved.
          </p>
    </section>
  );
};

export default Footer;
