import React from "react";
import Random3Blogs from "../blog/Random3Blogs";
import Footer from "../hooks/Footer";
import UseBanner from "../hooks/UseBanner";
import UseItThumb from "../hooks/UseItThumb";
import DisplayTeam from "./DisplayTeam";

const AllTeam = () => {
  return (
    <>
      <UseBanner primary="team" title="Our team" />
      <DisplayTeam skill />
      <Random3Blogs title="Read our article" />
      <UseItThumb />
      <Footer />
    </>
  );
};

export default AllTeam;
