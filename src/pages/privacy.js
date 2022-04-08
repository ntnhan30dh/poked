import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/index.scss"
import "../styles/privacy.scss"
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
    <div className="legalInfo-div">
    <div>
      <p class="c1"><span class="c11"></span></p>
    </div>
    <h1 class="c12" id="h.n37aipxqoj8x">
      <span class="c21">Privacy Notice</span>
    </h1>
    <h2 class="c4" id="h.5f54zvxy4sdg">
      <span class="c3">Privacy Notice</span>
    </h2>
    <p class="c2">
      <span class="c0"
        >We want to give you an amazing browsing experience on our website. For
        us, an amazing experience means at the same time, to protect your
        personal data in the best way we can. In order to achieve that, we want
        to be as transparent as possible and give you the chance to see how, why
        and where we process your data. This policy gives you an overview of:
        what information we keep on file, how long we intend to keep your
        information, why we are keeping your information, what your rights are
        as a data subject, who the data controller is, where you can file a
        complaint and if we share your information with third parties.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >All information will be processed by the Data Controller:</span
      >
    </p>
    <p class="c2"><span class="c0">Delivery Hero SE</span></p>
    <p class="c2"><span class="c0">Oranienburger Stra&szlig;e 70</span></p>
    <p class="c2"><span class="c0">10117 Berlin</span></p>
    <p class="c2">
      <span class="c7"
        >If you require additional information or have any concerns about the
        processing of your personal data please contact us by email at: </span
      ><span class="c18 c7"
        ><a class="c23" href="mailto:dpo@deliveryhero.com"
          >dpo@deliveryhero.com</a
        ></span
      ><span class="c0">&nbsp;</span>
    </p>
    <h2 class="c4" id="h.nm81kpp1i2bf">
      <span class="c22">Categories of personal data:</span>
    </h2>
    <p class="c2">
      <span class="c7"
        >When you browse our website, we also automatically receive your
        computer&rsquo;s internet protocol (IP) address in order to provide us
        with information that helps us learn about your browser and operating
        system. We also use cookies or similar technologies to collect extra
        data</span
      ><span class="c7">. You can access our cookie policy </span
      ><span class="c7">here</span>
    </p>
    <h2 class="c4" id="h.eldwn9ifm8ur">
      <span class="c3">Legal basis for the processing of your data</span>
    </h2>
    <p class="c2 c6"><span class="c0"></span></p>
    <p class="c13"><span class="c0">Based on our legitimate interest:</span></p>
    <ul class="c10 lst-kix_rp8429hl1pin-0 start list-disc">
      <li class="c5 li-bullet-0">
        <span class="c0"
          >For security and fraud prevention, and to ensure that our sites and
          apps are safe and secure and used in line with our terms of use</span
        >
      </li>
      <li class="c5 li-bullet-0">
        <span class="c7"
          >information on how you interact with our services</span
        >
      </li>
      <li class="c5 li-bullet-0">
        <span class="c7"
          >to collect and log IP addresses to improve the website and monitor
          website usage</span
        >
      </li>
      <li class="c5 li-bullet-0">
        <span class="c7"
          >your IP address - a numerical code to identify your device, together
          with the country, region or city where you are based.</span
        >
      </li>
    </ul>
    <p class="c13"><span class="c0">Based on your consent: </span></p>
    <ul class="c10 lst-kix_1y8kd6u0b1bd-0 start list-disc">
      <li class="c5 li-bullet-0">
        <span class="c0"
          >Your geolocation data - your IP address can be used to find
          information about the latitude, longitude, altitude of your device,
          its direction of travel, your GPS data and data about connection with
          local Wi-Fi equipment.</span
        >
      </li>
      <li class="c5 li-bullet-0">
        <span class="c7">D</span
        ><span class="c0"
          >details of your computer, unique vendor or advertising ID and browsers
          used to access our content</span
        >
      </li>
      <li class="c5 li-bullet-0">
        <span class="c7"
          >your browsing history of the content you have visited on our sites,
          including how you were referred to our sites via other websites</span
        >
      </li>
    </ul>
    <p class="c13 c6"><span class="c0"></span></p>
    <p class="c13 c6"><span class="c0"></span></p>
    <h2 class="c4" id="h.vmqk38x0gz69">
      <span class="c3">Service providers</span>
    </h2>
    <p class="c2">
      <span class="c0"
        >We use different data processors in our daily processing. These process
        your personal data in accordance with the requirements of Art. 28 GDPR
        and only according to our instructions and have no claims whatsoever on
        these data. We also monitor our processors and include only those who
        meet our high standards.</span
      >
    </p>
    <p class="c2">
      <span class="c7"
        >Because we use different data processors and change them from time to
        time, it is not appropriate to identify specific recipients of personal
        information. However, if you are interested, we will be happy to
        disclose the name of the processor(s) in use at that time upon request
        at </span
      ><span class="c7 c18"
        ><a class="c23" href="mailto:dpo@deliveryhero.com"
          >dpo@deliveryhero.com</a
        ></span
      ><span class="c0">.</span>
    </p>
    <p class="c2">
      <span class="c7">&nbsp;</span
      ><span class="c22">Processing in third countries</span>
    </p>
    <p class="c2">
      <span class="c0"
        >We process your data mainly within the European Union (EU) and the
        European Economic Area (EEA). However, some of our service providers
        mentioned above are based outside the EU and the EEA.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >Before we transfer your personal data to any third parties, we
        carefully assess if these companies have adequate security measures in
        place and if they meet the requirements outlined by GDPR.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >Only if they can demonstrate an adequate level of data protection will
        they be shortlisted for service providers.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >Regardless of whether our service providers are located within the
        EU/EEA or in third countries, each service provider must sign a data
        processing agreement with us. Service providers outside the EU/EEA must
        meet additional requirements. According to Art. 44 ff. GDPR personal
        data may be transferred to service providers that meet at least one of
        the following requirements:</span
      >
    </p>
    <ol class="c10 lst-kix_dmdkrfjlfdzz-0 start list-decimal"  start="1" >
      <li class="c5 li-bullet-0 ">
        <span class="c0"
          >Commission has decided that the third country ensures an adequate
          level of protection (e.g. Israel and Canada)</span
        >
      </li>
      <li class="c5 li-bullet-0">
        <span class="c0">Standard data protection clauses adopted. </span>
      </li>
      <li class="c5 li-bullet-0">
        <span class="c25"
          >Further appropriate safeguards in accordance with Art. 46 GDPR have
          been provided (for example Binding Corporate Rules)</span
        >
      </li>
    </ol>
    <p class="c2">
      <span class="c0"
        >These are contractual clauses which cannot be modified by the
        contracting parties and in which they undertake to ensure an adequate
        level of data protection.</span
      >
    </p>
    <h1 class="c4" id="h.ky3rsf84dxxs">
      <span class="c3">Retention Period</span>
    </h1>
    <p class="c2">
      <span class="c0"
        >In order to be able to reply to enquiries made through our website, we
        will need to store your data. We will not keep your data for a longer
        period that is needed for the purpose of processing and to comply with
        applicable law.</span
      >
    </p>
    <h2 class="c4" id="h.iemzs8wwdnyj">
      <span class="c3">Data subjects&rsquo; rights</span>
    </h2>
    <h3 class="c15" id="h.5svv0g9slavu">
      <span class="c9">Right to access</span>
    </h3>
    <p class="c2">
      <span class="c0"
        >You have the right to be informed which data we store about you and how
        we process this data.</span
      >
    </p>
    <h3 class="c15" id="h.zb0umpe55ukk">
      <span class="c9">Right to rectification</span>
    </h3>
    <p class="c2">
      <span class="c0"
        >If you notice that stored data is incorrect, you can always ask us to
        correct it.</span
      >
    </p>
    <h3 class="c15" id="h.9x4pr0hzusu2">
      <span class="c9">Right to erasure</span>
    </h3>
    <p class="c2">
      <span class="c7"
        >You can ask us at any time to delete the data we have stored about
        you.</span
      >
    </p>
    <p class="c8"><span class="c9">Right to restriction of processing</span></p>
    <p class="c8">
      <span class="c7"
        >If the necessary requirements are met, you can also restrict the
        processing of your data.</span
      >
    </p>
    <p class="c6 c8"><span class="c14"></span></p>
    <p class="c8"><span class="c24">Right to data portability</span></p>
    <p class="c8">
      <span class="c7"
        >&nbsp;Regarding data we process on the basis of your consent or a valid
        legal contract with you)</span
      >
    </p>
    <h3 class="c15" id="h.c05slsx4dsdf">
      <span class="c9">Right to object to the processing of your data</span>
    </h3>
    <p class="c2">
      <span class="c0"
        >You can revoke your consent at any time or object to the further
        processing of your data. This also includes objecting to our processing,
        which we process without your consent but based on our legitimate
        interest.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >If you do not agree with one of our processing purposes based on our
        legitimate interest or wish to object to it, you may object to the
        processing at any time on grounds relating to the particular situation.
        Please contact us by email at: hello@pokedbowls.com. In this case we
        will review the processing activity again and either stop processing
        your data for this purpose or explain to you our reasons worth
        protecting and why we will continue with the processing.</span
      >
    </p>
    <h3 class="c15" id="h.dgjn6n4houch">
      <span class="c9">Automated decision-making</span>
    </h3>
    <p class="c2">
      <span class="c0"
        >We do not have any processes where decisions are made in an automated
        way having a legal effect or similar effects on you.</span
      >
    </p>
    <h3 class="c15" id="h.4lghztswvjk5">
      <span class="c9">Right to lodge a complaint</span>
    </h3>
    <p class="c2">
      <span class="c0"
        >If you believe that we have done something wrong with your personal
        data or your rights, you can complain to the appropriate supervisory
        authority at any time.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >To exercise your rights, you can contact dpo@deliveryhero.com at any
        time.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >The responsible supervisory authority for Delivery Hero is:</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >Berliner Beauftragte f&uuml;r Datenschutz und
        Informationsfreiheit</span
      >
    </p>
    <p class="c2"><span class="c0">Friedrichstr. 219</span></p>
    <p class="c2"><span class="c0">10969 Berlin</span></p>
    <p class="c2 c6"><span class="c0"></span></p>
    <p class="c2">
      <span class="c0"
        >You can also send your complaint to the supervisory authority in your
        habitual residence or place of work.</span
      >
    </p>
    <p class="c2">
      <span class="c0"
        >If you would like to exercise your rights as a data subject, please do
        not hesitate to contact us under the contact information provided
        above.</span
      >
    </p>
    <h2 class="c4" id="h.gho11jirorz0">
      <span class="c3">Changes to this Privacy Notice</span>
    </h2>
    <p class="c2">
      <span class="c0"
        >We reserve the right to modify this privacy notice at any time, so
        please review it frequently. Changes and clarifications will take effect
        immediately upon their posting on the website. If we make material
        changes to this policy, we will notify you here that it has been
        updated, so that you are aware of what information we collect, how we
        use it, and under what circumstances, if any, we use and/or disclose
        it.</span
      >
    </p>
    <h2 class="c4" id="h.w2lr024xt70k">
      <span class="c3">Questions and Contact Information</span>
    </h2>
    <p class="c19">
      <span class="c7"
        >If you would like to: access, correct, amend or delete any personal
        information we have about you, register a complaint, or simply want more
        information, please contact us by email at: </span
      ><span class="c7">hello@pokedbowls.com.</span>
    </p>
    </div>
      < StyleProvider> 
    <Footer/>  
  </StyleProvider>
    </div>
  )
}
