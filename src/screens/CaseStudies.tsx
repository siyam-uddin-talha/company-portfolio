/*
*
*
*
*
authors:['Arnob Islam',....]
created date:'08-08-22'
description:'About page of the template'
github:'https://github.com/mihir-kanzariya/CompanyPortfolio'
*
*
*
*/

import { useLayoutEffect } from "react";
import CaseStudiesCom from "../components/case-studies";

const CaseStudies = () => {
  useLayoutEffect(() => {
    document.title = "Case studies | Tekorio";
  }, []);

  return (
    <>
      <CaseStudiesCom />
    </>
  );
};

export default CaseStudies;
