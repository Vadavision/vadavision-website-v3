import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import Testimonials from "../LandingPage/Testimonials/Testimonials";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import Herosection from "./Herosection/Herosection";
import Features from "./Features/Features";
import Benefits from "./Benefits/Benefits";
import UseCases from "./UseCases/UseCases";
import AiBotServises from "./AiBotServises/AiBotServises";
import DataProtection from "./DataProtection/DataProtection";
import CaseStudie from "./CaseStudies/CaseStudies";

const AiLanding = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Herosection />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Benefits />
      </div>
      <div>
        <AiBotServises />
      </div>
      <div>
        <UseCases />
      </div>
      <div>
        <DataProtection />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div>
        <CaseStudie />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <FooterLinks />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AiLanding;
