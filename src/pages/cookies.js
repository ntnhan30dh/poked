import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/index.scss"
import "../styles/cookies.scss"
import 'semantic-ui-css/semantic.min.css'

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

export default function Home() {  
   
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Poked</title>
      </head>
      < StyleProvider> 
      < MenuProvider> 
    <Header  /> 
  </MenuProvider>
  </StyleProvider>
    <div className="cookies-div ">
    <h2 class="c13" id="h.cjlmn9yjd2q4">
      <span class="c11">Cookies Information</span>
    </h2>
    <p class="c8">
      <span class="c7">In order for your visit to </span
      ><span class="c7">POK&Eacute;D</span
      ><span class="c0"
        >&nbsp;website to be attractive and to enable the use of certain
        functions, we use the so-called cookies on various pages. Cookies are
        small text files that are stored in your browser. Some of the cookies we
        use are deleted after the end of the operation period of your browser,
        eg. after the closing of the browser. Other cookies remain in your
        browser and allow us to identify your browser on your next visit
        (permanent cookies). You can configure your browser so that you are
        informed about the setting of cookies and decide individually on their
        acceptance or deviation for specific cases or in general. Non-acceptance
        of cookies may limit the functionality of our website.</span
      >
    </p>
    <p class="c8">
      <span class="c0">We classify the cookies in three categories:</span>
    </p>
    <ul class="c14 lst-kix_wp0ww4jg5dyd-0 start">
      <li class="c6 li-bullet-0"><span class="c0">Necessary</span></li>
      <li class="c6 li-bullet-0"><span class="c0">Functionality</span></li>
      <li class="c6 li-bullet-0"><span class="c0">Personalization</span></li>
    </ul>
    <p class="c8">
      <span class="c0"
        >We are &nbsp;using Necessary, functional, performance and marketing
        cookies that are required to navigate our site and use its features.
        Without the use of these cookies, the proper functioning of our website
        is not guaranteed (eg entering text) while browsing the pages of the
        website. In addition, they are cookies that collect information about
        how visitors use our site, for example, which pages they visit most
        often and if they receive error messages. They also let our site
        remember your choices, such as language or region, to provide enhanced
        features. They are also used to store information about the consent
        option where required. No action is required from you to activate
        them.</span
      >
    </p>
    <p class="c4"><span class="c5 c3">Absolutely necessary cookies</span></p>
    <p class="c4">
      <span class="c7"
        >Are required so that you can move around a website and use its
        features. Without these cookies, functionalities cannot be guaranteed,
        for example that actions taken during a visit (e.g. text input) are
        retained even when navigating between individual pages of the
        website.</span
      >
    </p>
    <p class="c4"><span class="c5 c10">&nbsp;</span></p>
    <p class="c4"><span class="c5 c3">Functional cookies</span></p>
    <p class="c4">
      <span class="c7"
        >Enable a website to save information that has already been entered
        (such as user name, language selection or the location where you are)
        and to offer the user improved, more personal functions. These cookies
        collect anonymized information, they cannot track your movements on
        other websites.</span
      >
    </p>
    <p class="c4"><span class="c0">&nbsp;</span></p>
    <p class="c4"><span class="c5 c3">Performance Cookies</span></p>
    <p class="c4">
      <span class="c0"
        >Collect information about how a website is used - such as which pages a
        visitor visits most often and whether he receives error messages from a
        page. These cookies do not store any information that would allow the
        user to be identified. The information collected is aggregated and
        anonymous. These cookies are used exclusively to improve the performance
        of a website and thus the user experience.</span
      >
    </p>
    <p class="c4"><span class="c0">&nbsp;</span></p>
    <p class="c4"><span class="c3 c5">Marketing cookies</span></p>
    <p class="c4">
      <span class="c0"
        >Are used to display advertisements that are more relevant to the user
        and tailored to their interests. They are also used to limit the number
        of times an ad appears and to measure the effectiveness of advertising
        campaigns. They register whether or not you have visited a website. This
        information can be shared with third parties (e.g. advertisers). Cookies
        to improve target group addressing and advertising are often linked to
        third party site functions.</span
      >
    </p>
    <p class="c16"><span class="c0 c19"></span></p>
    <h3 class="c18" id="h.1gkurup1fwij">
      <span class="c9">Cookies Overview</span>
    </h3>
    <p class="c12">
      <span class="c7"
        >For the sole purpose of pseudonymized user analysis,</span
      ><span class="c7"
        >&nbsp;we use Google Analytics, a service offered by Google Ireland
        Limited, Gordon House, Barrow Street Dublin 4 (Google).</span
      ><span class="c0"
        >&nbsp;The following cookies are dropped by the website (if your browser
        settings allow the website to do so):</span
      >
    </p>
    <p class="c12">
      <span class="c3">_ga</span
      ><span class="c0"
        >&nbsp;This cookie enables us to know what pages, content and activity a
        user has done for site analytics and performance measurement.
        Expiration: 2 years</span
      >
    </p>
    <p class="c12">
      <span class="c3">_gid</span
      ><span class="c0"
        >&nbsp;This cookie stores and updates a unique value for each page
        visited to allow for the pseudonymous analysis of site usage.
        Expiration: 1 day</span
      >
    </p>
    <p class="c12">
      <span class="c3">_gat</span
      ><span class="c0"
        >&nbsp;This cookie limits the collection of data on high traffic sites
        or peak usage times. It expires after 10 minutes and does not collect
        data.</span
      >
    </p>
    <p class="c12">
      <span class="c3">_dc_gtm_UA</span
      ><span class="c7"
        >&nbsp;This cookie is used by Google Tag Manager to support Google
        Analytics on the site. It helps us monitor the use and performance of
        our website. Expiration: 1 day</span
      >
    </p>
      </div>
      < StyleProvider> 
    <Footer/>  
  </StyleProvider>
    </div>
  )
}
