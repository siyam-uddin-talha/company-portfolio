import React from "react";
import UseBanner from "../hooks/UseBanner";
import VideoTestimonial from "./VideoTestimonial";
import Testimonial from "./Testimonial";
import UseTrustedCompnays from "../hooks/UseTrustedCompnays";
import { UseLetGetStarted } from "../hooks/UseItThumb";
import Footer from "../hooks/Footer";

const Index = () => {
  return (
    <>
      <UseBanner primary="feedback" title="Client Feedback" />
      <VideoTestimonial />
      <Testimonial />
      <UseTrustedCompnays />
      <UseLetGetStarted />
      <Footer />
    </>
  );
};

export default Index;
