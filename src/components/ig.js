import React, { useState, useEffect } from "react"
import { useStyle } from "./context/styleContext";


const IG = () =>{

  const style = useStyle();

  return (
      <section  id="ig" className={`${style.px} ig relative py-20 lg:pt-28 pb-24 md:pb-32 lg:pb-44 `}>
      <div className="w-full absolute z-20 -top-10 md:-top-24  ">
        <div className="w-72px md:w-28 mx-auto">
        <svg width="100%" height="auto" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96.252 115.147C95.9337 115.264 95.5836 115.258 95.2692 115.132C94.9548 115.005 94.6985 114.766 94.5499 114.462C94.4012 114.157 94.3707 113.808 94.4643 113.483C94.5579 113.157 94.7688 112.877 95.0565 112.698C122.683 95.3015 124.216 65.1372 116.306 42.1645L107.369 45.4172C107.028 45.5414 106.651 45.525 106.322 45.3715C105.992 45.2179 105.738 44.9399 105.613 44.5985C105.489 44.2571 105.506 43.8803 105.659 43.551C105.813 43.2217 106.091 42.967 106.432 42.8427L116.619 39.135C116.96 39.0107 117.337 39.0272 117.666 39.1807C117.996 39.3343 118.25 39.6123 118.375 39.9537C131.766 76.7467 115.841 102.868 96.4768 115.044L96.252 115.147Z" fill="#FF7CF8"/>
<path d="M42.0996 67.359L19.2317 36.5426L14.8407 39.3468L39.9916 68.4828L42.0996 67.359Z" fill="#FF7CF8"/>
<path d="M36.6471 70.0987L8.13603 44.4091L4.38777 48.0282L34.8053 71.6081L36.6471 70.0987Z" fill="#FF7CF8"/>
<path d="M110.842 47.3518C113.087 53.5213 114.096 60.0726 113.809 66.6318C113.523 73.1909 111.948 79.6295 109.173 85.5798C106.398 91.5301 102.479 96.8756 97.6382 101.311C92.7977 105.747 87.1309 109.185 80.9614 111.431C74.7919 113.676 68.2406 114.685 61.6814 114.398C55.1222 114.112 48.6837 112.536 42.7334 109.762C36.7831 106.987 31.4376 103.068 27.0021 98.2271C22.5665 93.3866 19.1278 87.7198 16.8823 81.5503L110.842 47.3518Z" fill="#009341"/>
</svg>

        </div>
      </div>
      <div className="relative">
        <div className="absolute  w-14 lg:w-20 lemon -top-10 lg:-top-24 -left-8 lg:left-14">
        <svg width="100%" height="auto" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.49972 38.0363C5.49972 23.8695 13.7501 11.002 26.5974 5.00858L32.501 11.4534C20.9464 15.4053 12.9983 26.2934 12.9983 38.4308C12.9983 54.1855 26.0099 67.0012 42.0025 67.0012C53.3952 67.0012 63.5161 60.5833 68.2713 50.5024L73.6897 56.4175C67.1304 67.5995 55.1055 74.5085 42.0907 74.5085C21.9142 74.5085 5.49972 58.1467 5.49972 38.0363ZM66.4215 48.4831L51.8735 32.6016L50.3791 63.1977C57.5197 60.8707 63.4031 55.6054 66.4215 48.4831ZM47.7975 28.152L34.3508 13.4727C26.2204 15.8883 19.8989 22.0157 17.0968 29.6148L47.7975 28.152ZM3 38.0362C3 59.5207 20.5356 77 42.0907 77C56.3129 77 69.4289 69.2787 76.3194 56.8473L76.7531 56.0649L27.2261 2L26.4062 2.35878C12.1865 8.57888 3 22.5825 3 38.0362ZM22.5883 56.1573L49.5949 32.109L48.0449 63.8425C46.0964 64.2869 44.0724 64.5189 42.0025 64.5189C34.3411 64.5189 27.4287 61.2974 22.5883 56.1573ZM47.6709 30.5019L20.975 54.2745C17.5537 49.879 15.5182 44.3846 15.5182 38.4308C15.5182 36.2266 15.8053 34.0675 16.3482 31.9944L47.6709 30.5019Z" fill="#FF7CF8"/>
</svg>
        </div>

        <div className="absolute hidden lg:block w-14 lg:w-20 avocado -rotate-45 -bottom-20 -right-16">
        <svg width="100%" height="auto" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8398 51.6023C28.1993 36.8771 51.0924 11.241 64.9903 16.2994C78.887 21.3574 79.9467 55.7116 74.5872 70.4368C69.4036 84.6785 53.5787 92.0411 39.3125 86.8486C25.045 81.6557 17.6562 65.8439 22.8398 51.6023ZM20.5227 50.7589C14.8748 66.2763 22.9264 83.5041 38.4705 89.1617C54.0147 94.8193 71.2564 86.7975 76.9042 71.2801C82.6889 55.3869 81.2593 19.6013 65.8321 13.9863C50.405 8.3713 26.3073 34.8657 20.5227 50.7589ZM36.6086 59.5556C38.924 53.1941 45.9841 49.9008 52.3464 52.2165C58.7088 54.5322 62.0002 61.5932 59.6848 67.9547C57.3694 74.3161 50.3098 77.6083 43.9474 75.2926C37.5851 72.9769 34.2932 65.9171 36.6086 59.5556ZM34.2752 58.7063C31.4914 66.3547 35.4489 74.8421 43.0982 77.6262C50.7475 80.4103 59.2347 76.4525 62.0185 68.804C64.8027 61.1544 60.8452 52.667 53.1959 49.8829C45.5466 47.0988 37.0594 51.0567 34.2752 58.7063Z" fill="#009341"/>
</svg>

        </div>
      <h1 className={`${style.text.h1} text-green shadow2 text-center  max-w-1240px mx-auto `}>Follow @poked_cl on Instagram for all the crunchiest news! </h1>
      </div>
      <div class="ocean">
  <div class="wave wave_pink1"></div>
</div>
    </section>
  )
}

export default IG