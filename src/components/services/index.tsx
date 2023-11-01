import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { LinkParser } from "../utils/Parser";
import { IService, ServiceData } from "./helper";
import Banner from "./Banner";
import Overview from "./Overview";
import OurApproach from "./OurApproach";
import TeachTable from "./TeachTable";
import Feature from "./Feature";
import Feq from "./Feq";
import UseTrustedCompnays from "../hooks/UseTrustedCompnays";
import { UseLetGetStarted } from "../hooks/UseItThumb";
import UseGridCaseStudies from "../hooks/UseGridCaseStudies";
import Footer from "../hooks/Footer";

const Index = () => {
  const { name } = useParams();

  const [singleData, setSingleData] = useState<IService>();

  useLayoutEffect(() => {
    const findIt = ServiceData.find((e) => {
      const regex = new RegExp(name as string, "gi");
      return LinkParser(e._route).match(regex);
    });

    document.title = findIt
      ? `${findIt.title} | Tekorio`
      : "Our Service | Tekorio";

    setSingleData(findIt);
  }, [name]);

  if (!singleData) {
    return <h1> Error </h1>;
  }

  return (
    <>
      <Banner data={singleData} />
      <UseTrustedCompnays />
      <Overview data={singleData} />
      <OurApproach data={singleData} />
      {singleData.teachTable && <TeachTable data={singleData} />}
      <Feature data={singleData} />
      <UseLetGetStarted />
      <UseGridCaseStudies />
      <Feq data={singleData} />
      <Footer />
    </>
  );
};

export default Index;
