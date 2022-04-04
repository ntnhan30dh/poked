import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Plx from 'react-plx';


import { useStyle } from "./context/styleContext";

import pic from "../images/palmTree.png";

const DescriptionCard = (props) => {
  const style = useStyle();
  const intl = useIntl();

  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'scale',
        },
      ],
    },
  ];

  const rotate = [
    {
      start: "self",
      duration: 1000,
      properties: [ 
          {
            startValue: 0,
            endValue: 360,
            property: "rotate"
          },
      ],
    },
  ];

  
  return (
    <div className="relative" id="story">
      <article
        className={`descriptionCard relative ${props.article} max-w-1300px xl:mx-auto pb-20 lg:pb-40 `}
      >
        <div
          className={`text /md:max-w-2/3 lg:max-w-auto  /w-full lg:w-2/3 lg:flex  mx-auto ${props.text}`}
        >
          <Plx className=" shrimp w-14 lg:w-20 lg:block hidden mr-16 -mb-48"
          parallaxData={ rotate }>

            <svg
              width="100%"
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
          </Plx>
          <div className="lg:w-3/4">
            <div className={` text-green my-8 relative`}>
              <h2 className={`${style.text.h2}`}
              >
                {intl.formatMessage({ id: "Story h2" })}
              </h2>
              <Plx  parallaxData={ parallaxData } className=" avocado z-20 absolute -top-16 lg:-top-6 right-1/3 lg:-right-20 w-14 lg:w-20"
             
              >
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
                    d="M22.8398 51.6023C28.1993 36.8771 51.0924 11.241 64.9903 16.2994C78.887 21.3574 79.9467 55.7116 74.5872 70.4368C69.4036 84.6785 53.5787 92.0411 39.3125 86.8486C25.045 81.6557 17.6562 65.8439 22.8398 51.6023ZM20.5227 50.7589C14.8748 66.2763 22.9264 83.5041 38.4705 89.1617C54.0147 94.8193 71.2564 86.7975 76.9042 71.2801C82.6889 55.3869 81.2593 19.6013 65.8321 13.9863C50.405 8.3713 26.3073 34.8657 20.5227 50.7589ZM36.6086 59.5556C38.924 53.1941 45.9841 49.9008 52.3464 52.2165C58.7088 54.5322 62.0002 61.5932 59.6848 67.9547C57.3694 74.3161 50.3098 77.6083 43.9474 75.2926C37.5851 72.9769 34.2932 65.9171 36.6086 59.5556ZM34.2752 58.7063C31.4914 66.3547 35.4489 74.8421 43.0982 77.6262C50.7475 80.4103 59.2347 76.4525 62.0185 68.804C64.8027 61.1544 60.8452 52.667 53.1959 49.8829C45.5466 47.0988 37.0594 51.0567 34.2752 58.7063Z"
                    fill="#FF7CF8"
                  />
                </svg>
              </Plx>
            </div>
            <p className={`${style.text.body1} font-medium relative`}>
              {intl.formatMessage({ id: "Story p1" })}
              <br /> <br />
              {intl.formatMessage({ id: "Story p2" })}
              <div className="absolute -bottom-16 lg:bottom-auto lg:top-10 left-0  lg:-left-32 w-14 lg:w-20 lg:hidden"
              >
                <svg
                  width="100%"
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
            </p>
          </div>
        </div>
        <div className={`w-72 mx-auto lg:w-1/2  max-w-500px my-14`}>
          <img src={pic} alt="description" className="w-full " />
        </div>
      </article>
      <div class="ocean">
        <div class="wave wave_pink2"></div>
      </div>
    </div>
  );
};

export default DescriptionCard;
