import React, { useRef } from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";

import MenuItem from "./menuItem";
import Plx from "react-plx/lib/Plx";

const Carousel = () => {
  const intl = useIntl();
  //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const itemList =
    intl.locale === "en"
      ? [
          "Teriyaki Chicken",
          "Spicy Beef",
          "Aloha Salmon",
          "DIY Bowl",
          "New York Salad",
          "California Salad",
          "Teriyaki Chicken Salad",
          "Miu Chicken Salad",
        ]
      : [
          "Teriyaki Chicken",
          "Aloha Salmon",
          "DIY Bowl",
          "Tuna Oahu Poke",
          "New York Salad",
          "Teriyaki Chicken Salad",
          "Miu Chicken Salad",
          "Shrimp Ceviche Gohan",
        ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    //autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 2,
          //centerMode: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          //centerMode: true,
        },
      },
    ],
  };
  const btnStyle = "opacity-50 hover:opacity-100 mx-24 hidden lg:block";
  const arrowStyle = "w-8";
  const arrow = "";

  const rotate = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 0,
          endValue: 360,
          property: "rotate",
        },
      ],
    },
  ];

  const fish = [
    {
      start: "self",
      duration: 1000,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ];

  const moveUp = [
    {
      start: "self",
      duration: 500,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <div className="CarouselWrap relative flex justify-center ml-5">
      <button onClick={() => gotoPrev()} className={`  ${btnStyle} ${arrow}`}>
        <div className={arrowStyle}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 64 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 66L16 34L48 2"
              stroke="#FF7CF8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
      <div className="Carousel max-w-5xl w-full">
        <Slider {...settings} className="" ref={customeSlider}>
          {itemList.map((n) => {
            return <MenuItem name={n} />;
          })}
        </Slider>
      </div>
      <button onClick={() => gotoNext()} className={` ${btnStyle} ${arrow} `}>
        <div className={arrowStyle}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 64 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 66L48 34L16 2"
              stroke="#FF7CF8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>

      <Plx
        parallaxData={fish}
        className="fish absolute hidden lg:block w-20 -top-40 right-52"
      >
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.4519 68.2137C15.9755 62.7759 10.6149 48.864 9.5224 45.696C11.6017 43.1691 21.0398 32.4768 33.109 30.806C36.3793 38.0294 37.3389 44.1167 36.2203 50.4605C34.9724 57.5379 32.1021 63.3542 27.4519 68.2137ZM30.0959 69.2722C31.0929 69.6006 32.1304 69.8649 33.2094 70.0552C51.6087 73.2994 66.0257 59.2605 68.9422 56.1692C67.4673 52.7585 60.5899 38.491 46.6325 32.8079L45.8576 32.4936L45.811 31.655C45.6077 27.9396 46.2832 24.4356 47.6931 21.6964C43.0008 21.8797 38.0675 25.2013 35.1835 29.0475L35.2178 29.0315C38.9236 36.9582 40.0735 43.9138 38.8378 50.922C37.5608 58.164 34.6953 64.1871 30.0959 69.2722ZM12.5845 57.9196C17.971 66.1895 24.9438 71.2897 32.7489 72.666C52.7744 76.197 67.8284 61.2863 70.9236 57.9323L83.0996 71.9347L87.7947 45.307L71.1262 54.5431C69.1589 50.11 62.2496 36.7076 48.4215 30.6863C48.3659 26.9928 49.3215 23.5437 51.0327 21.3394L52.3813 19.6015L50.2206 19.2205C43.4145 18.0204 36.1591 22.8755 32.5329 28.2117C17.9424 30.3482 7.43733 44.0406 6.99146 44.6295L6.58586 45.165L6.77666 45.8096C6.84857 46.0484 8.56531 51.7467 12.5845 57.9196ZM22.8582 40.8303C22.6298 42.1261 23.4977 43.3656 24.7935 43.5941C26.0892 43.8226 27.3288 42.9546 27.5572 41.6589C27.7857 40.3631 26.9178 39.1236 25.622 38.8951C24.3263 38.6666 23.0867 39.5346 22.8582 40.8303ZM73.1787 56.4576L81.4581 65.9777L84.2148 50.3434L73.1787 56.4576Z"
            fill="#009341"
          />
        </svg>
      </Plx>

      <Plx
        parallaxData={moveUp}  className="absolute hidden lg:block w-20 -bottom-20 right-40">
        <svg
          width="100%"
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
      </Plx>

      <Plx
        parallaxData={rotate}
        className="chili absolute hidden lg:block w-20 -top-80 left-52"
      >
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 96 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.7682 31.0248L19.2108 32.3704L21.9588 31.4807L21.5163 30.1351C20.7131 27.6892 20.3776 25.5608 20.3687 23.7262C27.5005 22.5201 31.9347 24.491 34.2652 29.8701C35.0194 31.6095 35.7614 34.1687 36.545 36.8766L36.5459 36.8798C38.5164 43.6804 40.9679 52.1409 45.8964 56.3518C57.1101 65.9293 64.5461 62.4171 78.0459 56.0407L78.0477 56.0399L78.0684 56.0301C82.0632 54.1438 86.5898 52.0063 91.9935 49.8182C92.4656 49.6298 92.7968 49.9056 92.915 50.0366C93.0309 50.1637 93.2734 50.508 93.0329 50.9493C85.2537 65.1787 72.6471 75.1763 58.449 78.3814C46.8178 81.0623 35.395 78.8523 26.3388 72.3002C19.4142 67.2926 11.0308 55.6716 7.91233 41.0005C5.96569 31.8423 8.92415 26.6499 17.4931 24.3516C17.565 26.3236 17.9535 28.5434 18.7682 31.0248ZM17.6247 21.4556C6.91017 24.0191 2.835 30.6116 5.16728 41.5841C8.43807 56.9719 17.3221 69.2271 24.6773 74.5461C34.2414 81.4628 46.2155 83.8236 58.4588 81.2213C58.6591 81.1787 58.8606 81.1344 59.0604 81.0891C74.0513 77.7055 87.3328 67.1984 95.4998 52.2624C96.2331 50.9204 96.0401 49.3171 95.0077 48.1788C93.9725 47.034 92.3794 46.6661 90.9423 47.2482C85.4539 49.4703 80.8832 51.6294 76.8498 53.5352L76.8404 53.5396C63.6049 59.7888 57.5619 62.6421 47.7341 54.2461C43.4353 50.5728 41.1118 42.5534 39.2433 36.1046L39.2418 36.0992L39.2335 36.0705C38.3922 33.1679 37.6654 30.6602 36.8435 28.7646C34.082 22.3938 28.6377 19.7462 20.6448 20.8771C21.4223 17.181 23.6817 15.1688 25.3501 14.4909L26.6877 13.9474L25.6036 11.3275L24.2664 11.8724C21.8209 12.8649 18.367 15.9018 17.6247 21.4556Z"
            fill="#FF7CF8"
          />
        </svg>
      </Plx>

      <Plx
        parallaxData={moveUp} className="absolute drink hidden xl:block w-20 bottom-0 left-20">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2923 55.9346L41.0653 29.8453L29.5171 25.6422L20.6909 49.8921L37.2923 55.9346ZM36.915 58.5435L34.9946 71.8231L37.5399 72.1865L39.3833 59.4419L63.4585 68.2045L56.8387 86.3923C56.2535 88.0002 55.0535 89.3097 53.5027 90.0329C51.9519 90.756 50.1775 90.8335 48.5696 90.2483L17.0444 78.774C15.4365 78.1888 14.1269 76.9888 13.4038 75.4381C12.6807 73.8873 12.6032 72.1128 13.1884 70.5049L19.8082 52.3171L36.915 58.5435ZM17.3832 51.4345L10.7634 69.6223C9.94409 71.8733 10.0526 74.3576 11.065 76.5287C12.0773 78.6998 13.9107 80.3797 16.1617 81.199L47.6869 92.6733C49.938 93.4926 52.4222 93.3841 54.5933 92.3717C56.7644 91.3593 58.4444 89.526 59.2637 87.2749L70.3136 56.9156C73.0796 57.6873 76.005 57.7378 78.8083 57.0519C82.0309 56.2633 84.9472 54.5369 87.1886 52.0909C89.4299 49.6449 90.8956 46.5891 91.4003 43.3101C91.905 40.0311 91.426 36.6761 90.0239 33.6693C88.6218 30.6625 86.3596 28.139 83.5233 26.4179C80.687 24.6968 77.4041 23.8554 74.0896 24.0001C70.7752 24.1449 67.578 25.2692 64.9026 27.2309C62.5752 28.9374 60.7335 31.2109 59.5467 33.8258L43.9116 28.1351L46.9305 7.26361L32.6108 2.05167L31.7282 4.47668L44.0836 8.97369L41.4426 27.2364L27.9747 22.3345L18.2658 49.0095L17.3832 51.4345ZM64.3411 65.7795L39.7607 56.833L43.5343 30.744L73.1674 41.5296L64.3411 65.7795ZM71.1993 54.482C73.4828 55.0847 75.8878 55.1097 78.1949 54.5452C80.9217 53.8779 83.3894 52.4171 85.2859 50.3474C87.1824 48.2777 88.4227 45.6921 88.8497 42.9176C89.2767 40.143 88.8714 37.3041 87.685 34.7599C86.4986 32.2157 84.5845 30.0805 82.1846 28.6242C79.7847 27.1679 77.0068 26.4559 74.2022 26.5784C71.3977 26.7008 68.6924 27.6521 66.4285 29.3121C64.5131 30.7166 62.9864 32.5749 61.9803 34.7115L76.475 39.9872L71.1993 54.482Z"
            fill="#009341"
          />
        </svg>
      </Plx>
    </div>
  );
};

export default Carousel;
