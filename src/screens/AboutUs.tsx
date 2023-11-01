/*
*
*
*
*
authors:['Arnob Islam',....]
created date:'07-08-22'
description:'About page of the template'
github:'https://github.com/mihir-kanzariya/CompanyPortfolio'
*
*
*
*/

import { useLayoutEffect } from "react";
import AboutUsComponent from "../components/about";

const AboutUs = () => {
  useLayoutEffect(() => {
    document.title = "Our company | Tekorio";
  }, []);

  return (
    <>
      <AboutUsComponent />
    </>
  );
};

export default AboutUs;
