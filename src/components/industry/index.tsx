import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { LinkParser } from "../utils/Parser";
import { IndustryData, IIndustry } from "./helper";
import Banner from "./Banner";
import Benefits from "./Benefits";
import UseToDisplayContant from "./UseToDisplayContant";
import UseTrustedCompnays from "../hooks/UseTrustedCompnays";
import Soluation from "./Soluation";
import { UseLetGetStarted } from "../hooks/UseItThumb";
import SoftwareProcess from "../hooks/SoftwareProcess";
import ClientTestimonial from "./ClientTestimonial";
import WorkingSoution from "../home/ClientCount";
import UseGridCaseStudies from "../hooks/UseGridCaseStudies";
import Footer from "../hooks/Footer";
import Feq from "../services/Feq";

const Index = () => {
  const { name } = useParams();

  const [singleData, setSingleData] = useState<IIndustry>();

  useLayoutEffect(() => {
    const findIt = IndustryData.find((e) => {
      const regex = new RegExp(name as string, "gi");
      return LinkParser(e.title).match(regex);
    });

    document.title = findIt
      ? `${findIt.title} | Tekorio`
      : "Our Industry | Tekorio";
    setSingleData(findIt);
  }, [name]);

  if (!singleData) {
    return <h1> Error </h1>;
  }

  return (
    <>
      <Banner data={singleData} />
      <UseToDisplayContant
        data={{ title: singleData.title, description: singleData.overViewText }}
        img="/assets/point.svg"
      />
      <Benefits data={singleData} />
      <UseTrustedCompnays />
      <Soluation data={singleData} />
      <UseLetGetStarted />
      <UseToDisplayContant
        data={singleData.backward}
        img="/assets/invest.svg"
        reverse
      />
      <SoftwareProcess />
      <UseToDisplayContant
        data={singleData.cost}
        img="/assets/cost.svg"
        reverse
      />
      <ClientTestimonial />
      <WorkingSoution />
      <UseGridCaseStudies />
      <Feq data={singleData} />
      <Footer />
    </>
  );
};

export default Index;
