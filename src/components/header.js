import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import logo from "../images/logo.png";

import { useMenu, useMenuUpdate } from "./context/menuContext";
import { useStyle } from "./context/styleContext";
import OrderNow from "./orderNow";

const Header = (props) => {
  const menuState = useMenu();
  const toggleMenu = useMenuUpdate();
  const style = useStyle();

  const intl = useIntl();
  const locale = intl.locale !== "en" ? `/${intl.locale}` : "";

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const logoSrc = logo;

  let menuActive = menuState ? "is-inactive" : "";
  let change = menuState ? "change" : "";
  const link = "w-full text-center /mb-8  ";
  const link1 = "h-full  py-4 ";
  const span = " span  my-auto pb-1 hover: border-b-4 border-pink1 font-bold ";
  const span1 = "  /flex /items-center my-auto  h-full hover:border-b-4 border-pink1 hover:font-bold";

  return (
    <header className="headerWrapper relative z-50 w-full sticky top-0 bg-pink2 overflow-x-hidden text-green text-18px uppercase font-medium ">
      <nav
        className={`nav relative z-20 lg:flex justify-between items-center  flex-row ${style.mx} py-4 `}
      >
        <div className="left w-40 lg:w-56">
          <Link to={`${locale}/`} className=" w-full ">
            <img src={logoSrc} alt="logo" className=" w-full " />
          </Link>
        </div>
        {/* desktop */}

        <div
          className={` desktop hidden lg:flex items-center justify-between w-3/4 h-full `}
          currentClassName="opacity-100 border-t-4 border-white "
        >
          <Link to="/" href="" className={link1}>
            <span className={span1}>
              {intl.formatMessage({ id: "Our Story" })}
            </span>
          </Link>

          <div className="span1"></div>

          <Link to="/" href="" className={link1}>
            <span className={span1}>{intl.formatMessage({ id: "Menu" })}</span>
          </Link>

          <div className="span1"></div>
          <Link to="/" href="" className={link1}>
            <span className={span1}>
              {intl.formatMessage({ id: "Follow Us" })}
            </span>
          </Link>
          <div className="span1"></div>
          <Link to="/" href="" className={link1}>
            <span className={span1}>
              {intl.formatMessage({ id: "Contact" })}
            </span>
          </Link>
          <div className="span1"></div>
          <div to="/" href="" className={link1}>
            <Link
              to="/"
              className={`  ${intl.locale === "en" ? "font-bold" : ""} `}
            >
              {" "}
              En{" "}
            </Link>{" "}
            |{" "}
            <Link
              className={`  ${intl.locale === "es" ? "font-bold" : ""} `}
              to="/es"
            >
              {" "}
              Es{" "}
            </Link>
          </div>
          <OrderNow padding="py-4 px-6" />
        </div>

        {/* mobile  */}
        <div
          className={` mobile header_rightDiv relative z-10  hidden  justify-center  h-screen w-full absolute top-0 right-0 bg-pink2 ${menuActive} `}
        >
          <div className=" flex flex-col justify-around lg:hidden mt-1/10 /mb-1/3 h-3/4 w-full ">
            <Link
              onClick={toggleMenu}
              to="/#story"
              className={link}
              activeClassName="bg-black"
            >
              <span className={span}>
                {intl.formatMessage({ id: "Our Story" })}
              </span>
            </Link>
            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>
                {" "}
                {intl.formatMessage({ id: "Menu" })}{" "}
              </span>
            </Link>

            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>
                {" "}
                {intl.formatMessage({ id: "Follow Us" })}{" "}
              </span>
            </Link>

            <Link onClick={toggleMenu} to="/" className={link}>
              <span className={span}>
                {intl.formatMessage({ id: "Contact" })}
              </span>
            </Link>

            <div to="/" href="" className={link}>
              <Link
                to="/"
                className={`  ${intl.locale === "en" ? "font-bold" : ""} `}
              >
                {" "}
                En{" "}
              </Link>{" "}
              |{" "}
              <Link
                className={`  ${intl.locale === "es" ? "font-bold" : ""} `}
                to="/es"
              >
                {" "}
                Es{" "}
              </Link>
            </div>
            <OrderNow padding="py-4 w-full" />
          </div>
          <div className="icons absolute top-0 right-0 w-full h-full grid grid-cols-4 grid-rows-10">
            <div className="row-start-2  ...">
              <svg
                width="56"
                height="auto"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M76.6996 14.1022L76.5231 13.1017C75.6691 8.25835 71.0335 5.01248 66.1902 5.8665L32.1669 11.8657L31.7356 9.41958L65.7589 3.42036C71.9513 2.32847 77.8774 6.47799 78.9693 12.6704L79.1457 13.6709L79.1459 13.6709L79.3615 14.894C81.8587 29.0559 72.3691 42.6099 58.206 45.1072L50.8676 46.4012C38.5231 48.5779 33.4385 54.8366 35.3251 65.536C37.0173 75.1326 49.2624 79.4363 56.6813 80.5543L79.3732 57.8688L83.0224 78.5643L53.4572 83.7775L53.4573 83.7774L46.7223 84.9649C38.1071 86.484 29.0262 84.4117 21.8055 79.2785C14.8297 74.3178 10.2592 67.0855 8.93843 58.9157C6.09236 41.2944 17.2868 24.5783 33.8924 21.6503L76.6996 14.1022ZM16.6991 35.4034C20.8555 29.5872 27.0193 25.3844 34.3237 24.0964L43.1392 22.542L47.0465 44.7018C42.901 45.8164 39.62 47.5166 37.2287 49.7708L16.6991 35.4034ZM15.3406 37.4813C11.7483 43.5039 10.1631 50.92 11.3908 58.5199C11.9504 61.98 13.146 65.2589 14.9023 68.2362L32.7379 65.0913C31.9432 59.6286 32.9037 55.1134 35.5544 51.6276L15.3406 37.4813ZM33.113 67.056L16.0748 70.0603C17.9843 72.7955 20.3969 75.2289 23.2456 77.254C29.9271 82.0043 38.3276 83.923 46.291 82.5188L50.6867 81.7437C43.4329 79.5878 35.1492 75.0587 33.113 67.056ZM48.995 44.2346C49.4656 44.1347 49.946 44.0415 50.4362 43.9551L57.7746 42.6611C70.1778 40.4741 78.6204 28.9143 77.0992 16.554L45.1088 22.1947L48.995 44.2346ZM55.618 30.4305C54.2689 30.6684 52.9784 29.7647 52.7405 28.4157C52.5027 27.0666 53.4063 25.7761 54.7553 25.5382C56.1044 25.3003 57.3949 26.204 57.6328 27.553C57.8707 28.9021 56.967 30.1926 55.618 30.4305ZM60.7862 79.963L80.1449 76.5495L77.7556 62.9991L60.7862 79.963Z"
                  fill="#FF7CF8"
                />
              </svg>
            </div>
            <div className="row-start-7 relative">
              <svg
                width="56"
                height="auto"
                viewBox="0 0 103 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-10 -rotate-12"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.2923 55.9346L41.0653 29.8453L29.5171 25.6422L20.6909 49.8921L37.2923 55.9346ZM36.915 58.5435L34.9946 71.8231L37.5399 72.1865L39.3833 59.4419L63.4585 68.2045L56.8387 86.3923C56.2535 88.0002 55.0535 89.3097 53.5027 90.0329C51.9519 90.756 50.1775 90.8335 48.5696 90.2483L17.0444 78.774C15.4365 78.1888 14.1269 76.9888 13.4038 75.4381C12.6807 73.8873 12.6032 72.1128 13.1884 70.5049L19.8082 52.3171L36.915 58.5435ZM17.3832 51.4345L10.7634 69.6223C9.94409 71.8733 10.0526 74.3576 11.065 76.5287C12.0773 78.6998 13.9107 80.3797 16.1617 81.199L47.6869 92.6733C49.938 93.4926 52.4222 93.3841 54.5933 92.3717C56.7644 91.3593 58.4444 89.526 59.2637 87.2749L70.3136 56.9156C73.0796 57.6873 76.005 57.7378 78.8083 57.0519C82.0309 56.2633 84.9472 54.5369 87.1886 52.0909C89.4299 49.6449 90.8956 46.5891 91.4003 43.3101C91.905 40.0311 91.426 36.6761 90.0239 33.6693C88.6218 30.6625 86.3596 28.139 83.5233 26.4179C80.687 24.6968 77.4041 23.8554 74.0896 24.0001C70.7752 24.1449 67.578 25.2692 64.9026 27.2309C62.5752 28.9374 60.7335 31.2109 59.5467 33.8258L43.9116 28.1351L46.9305 7.26361L32.6108 2.05167L31.7282 4.47668L44.0836 8.97369L41.4426 27.2364L27.9747 22.3345L18.2658 49.0095L17.3832 51.4345ZM64.3411 65.7795L39.7607 56.833L43.5343 30.744L73.1674 41.5296L64.3411 65.7795ZM71.1993 54.482C73.4828 55.0847 75.8878 55.1097 78.1949 54.5452C80.9217 53.8779 83.3894 52.4171 85.2859 50.3474C87.1824 48.2777 88.4227 45.6921 88.8497 42.9176C89.2767 40.143 88.8714 37.3041 87.685 34.7599C86.4986 32.2157 84.5845 30.0805 82.1846 28.6242C79.7847 27.1679 77.0068 26.4559 74.2022 26.5784C71.3977 26.7008 68.6924 27.6521 66.4285 29.3121C64.5131 30.7166 62.9864 32.5749 61.9803 34.7115L76.475 39.9872L71.1993 54.482Z"
                  fill="#009341"
                />
              </svg>
            </div>
            <div className="row-start-5 col-start-5 ...">
              <svg
                width="56"
                height="auto"
                viewBox="0 0 103 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.8398 51.6023C28.1993 36.8771 51.0924 11.241 64.9903 16.2994C78.887 21.3574 79.9467 55.7116 74.5872 70.4368C69.4036 84.6785 53.5787 92.0411 39.3125 86.8486C25.045 81.6557 17.6562 65.8439 22.8398 51.6023ZM20.5227 50.7589C14.8748 66.2763 22.9264 83.5041 38.4705 89.1617C54.0147 94.8193 71.2564 86.7975 76.9042 71.2801C82.6889 55.3869 81.2593 19.6013 65.8321 13.9863C50.405 8.3713 26.3073 34.8657 20.5227 50.7589ZM36.6086 59.5556C38.924 53.1941 45.9841 49.9008 52.3464 52.2165C58.7088 54.5322 62.0002 61.5932 59.6848 67.9547C57.3694 74.3161 50.3098 77.6083 43.9474 75.2926C37.5851 72.9769 34.2932 65.9171 36.6086 59.5556ZM34.2752 58.7063C31.4914 66.3547 35.4489 74.8421 43.0982 77.6262C50.7475 80.4103 59.2347 76.4525 62.0185 68.804C64.8027 61.1544 60.8452 52.667 53.1959 49.8829C45.5466 47.0988 37.0594 51.0567 34.2752 58.7063Z"
                  fill="#009341"
                />
              </svg>
            </div>
            <div className="row-start-9 col-start-3  ...">
              <svg
                width="56"
                height="auto"
                viewBox="0 0 104 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.5497 49.0945L42.7346 48.6633C44.3058 48.0914 45.5854 46.9188 46.292 45.4035C46.9987 43.8881 47.0744 42.1541 46.5025 40.5829L44.3462 34.6585L43.4837 32.2889L37.4464 15.7014L35.0767 16.5638L41.1141 33.1514L31.6354 36.6013L25.5981 20.0138L23.2284 20.8763L29.2658 37.4638L19.787 40.9138L13.7497 24.3262L11.38 25.1887L17.4174 41.7763L18.2799 44.1459L20.4361 50.0703C21.008 51.6415 22.1806 52.9211 23.696 53.6278C25.2114 54.3344 26.9454 54.4101 28.5165 53.8382L29.7013 53.407L43.07 90.137C43.6418 91.7082 44.8144 92.9878 46.3298 93.6944C47.8452 94.4011 49.5792 94.4768 51.1504 93.9049C52.7215 93.333 54.0012 92.1605 54.7078 90.6451C55.4145 89.1297 55.4902 87.3957 54.9183 85.8245L41.5497 49.0945ZM20.6495 43.2834L22.8058 49.2078C23.1489 50.1505 23.8525 50.9183 24.7617 51.3423C25.6709 51.7663 26.7113 51.8117 27.6541 51.4686L41.8721 46.2936C42.8148 45.9505 43.5826 45.2469 44.0066 44.3377C44.4306 43.4285 44.476 42.3881 44.1328 41.4454L41.9766 35.521L32.4979 38.971L32.498 38.9711L30.1283 39.8336L30.1282 39.8335L20.6495 43.2834ZM39.18 49.957L32.071 52.5445L45.4396 89.2745C45.7828 90.2172 46.4863 90.985 47.3955 91.409C48.3047 91.8329 49.3452 91.8784 50.2879 91.5352C51.2306 91.1921 51.9984 90.4886 52.4224 89.5793C52.8464 88.6701 52.8918 87.6297 52.5486 86.687L39.18 49.957ZM80.7626 53.6073L73.6536 56.1948L80.9847 76.3369C81.3278 77.2796 82.0314 78.0475 82.9406 78.4714C83.8498 78.8954 84.8903 78.9408 85.833 78.5977C86.7757 78.2546 87.5435 77.551 87.9675 76.6418C88.3915 75.7326 88.4369 74.6922 88.0937 73.7495L80.7626 53.6073ZM71.2839 57.0573L66.5444 58.7823L54.9008 26.7918C53.414 22.7067 53.6108 18.1983 55.448 14.2583C57.2853 10.3184 60.6124 7.26961 64.6975 5.78276L65.8823 5.35151L82.7008 51.56L82.701 51.5599L90.4634 72.887C91.0353 74.4582 90.9596 76.1922 90.2529 77.7075C89.5463 79.2229 88.2666 80.3955 86.6955 80.9674C85.1243 81.5392 83.3903 81.4635 81.8749 80.7569C80.3595 80.0503 79.1869 78.7706 78.6151 77.1994L71.2839 57.0573ZM79.8999 51.2377L68.0516 55.5502L57.2705 25.9293C56.0701 22.6734 56.1339 19.0859 57.4491 15.8747C58.7644 12.6635 61.2357 10.062 64.3751 8.58367L79.8999 51.2377Z"
                  fill="#009341"
                />
              </svg>
            </div>
            <div className="row-start-9 col-start-5  relative">
              <svg
                width="56"
                height="auto"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-10 -top-5"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.49972 38.0363C5.49972 23.8695 13.7501 11.002 26.5974 5.00858L32.501 11.4534C20.9464 15.4053 12.9983 26.2934 12.9983 38.4308C12.9983 54.1855 26.0099 67.0012 42.0025 67.0012C53.3952 67.0012 63.5161 60.5833 68.2713 50.5024L73.6897 56.4175C67.1304 67.5995 55.1055 74.5085 42.0907 74.5085C21.9142 74.5085 5.49972 58.1467 5.49972 38.0363ZM66.4215 48.4831L51.8735 32.6016L50.3791 63.1977C57.5197 60.8707 63.4031 55.6054 66.4215 48.4831ZM47.7975 28.152L34.3508 13.4727C26.2204 15.8883 19.8989 22.0157 17.0968 29.6148L47.7975 28.152ZM3 38.0362C3 59.5207 20.5356 77 42.0907 77C56.3129 77 69.4289 69.2787 76.3194 56.8473L76.7531 56.0649L27.2261 2L26.4062 2.35878C12.1865 8.57888 3 22.5825 3 38.0362ZM22.5883 56.1573L49.5949 32.109L48.0449 63.8425C46.0964 64.2869 44.0724 64.5189 42.0025 64.5189C34.3411 64.5189 27.4287 61.2974 22.5883 56.1573ZM47.6709 30.5019L20.975 54.2745C17.5537 49.879 15.5182 44.3846 15.5182 38.4308C15.5182 36.2266 15.8053 34.0675 16.3482 31.9944L47.6709 30.5019Z"
                  fill="#FF7CF8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`lg:hidden burgerMenu  absolute top-5 right-0 lg:right-8 z-50 ${change}`}
          onClick={toggleMenu}
          onKeyDown={props.toggleMenu}
          role="button"
          tabIndex={-1}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
