/*
*
*
*
*
authors:['Arnob Islam',....]
created date:'05-08-22'
description:'Home page of the template'
github:'https://github.com/mihir-kanzariya/CompanyPortfolio'
*
*
*
*/

import { useLayoutEffect } from "react";
import HomePage from "../components/home";

const Landing = () => {
  useLayoutEffect(() => {
    document.title = "Tekorio";
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
};

export default Landing;
