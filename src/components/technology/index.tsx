import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../hooks/Footer";
import UseTrustedCompnays from "../hooks/UseTrustedCompnays";
import Banner from "../services/Banner";
import Feq from "../services/Feq";
import OurApproach from "../services/OurApproach";
import TeachTable from "../services/TeachTable";
import WhyThis from "./WhyThis";
import SkillMember from "./SkillMember";
import { LinkParser } from "../utils/Parser";
import { ITechnology, TechnologyData } from "./helper";
import { TeamMembers, IMember } from "../team/helper";
import UseItThumb from "../hooks/UseItThumb";
import Random3Blogs from "../blog/Random3Blogs";
import SoftwareProcess from "../hooks/SoftwareProcess";
import { Box } from "@mui/material";

const Index = () => {
  const { name } = useParams();

  const [singleData, setSingleData] = useState<ITechnology>();
  const [developer, setDeveloper] = useState<IMember[]>([]);

  useLayoutEffect(() => {
    const findIt = TechnologyData.find((e) => {
      const regex = new RegExp(name as string, "gi");
      return LinkParser(e._route).match(regex);
    });

    document.title = findIt
      ? `${findIt.title} | Tekorio`
      : "Our Technology | Tekorio";
    setSingleData(findIt);

    const _members = TeamMembers.filter((member) =>
      member.skill.some((skil) => skil === findIt?.catagory)
    );
    setDeveloper(_members);
  }, [name]);

  if (!singleData) {
    return <h1> Error </h1>;
  }

  return (
    <>
      <Banner data={singleData} />
      <UseTrustedCompnays />
      <WhyThis data={singleData} />
      <SkillMember members={developer} catagory={singleData.catagory} />
      <UseItThumb />
      <Box pt={"5em"} pb={"2.5em"}>
        <OurApproach data={singleData} reverse borderLess />
      </Box>
      {singleData.teachTable && <TeachTable data={singleData} />}
      <SoftwareProcess />
      <Random3Blogs title="Read Blogs" />
      <Feq data={singleData} />
      <Footer />
    </>
  );
};

export default Index;
