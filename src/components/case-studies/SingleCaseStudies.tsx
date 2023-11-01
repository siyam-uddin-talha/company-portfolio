import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { CaseStudiesFullData, CaseContentType } from "./helper";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";

import Footer from "../hooks/Footer";
import UseItThumb from "../hooks/UseItThumb";

const SingleCaseStudies = () => {
  const { name } = useParams();

  const [singleData, setSingleData] = useState<CaseContentType>();

  useLayoutEffect(() => {
    const findIt = CaseStudiesFullData.find(
      (e) => name === `${e.title.split(" ").join("-").toLowerCase()}`
    );
    document.title = findIt
      ? `${findIt.title} | Tekorio`
      : "Our company | Tekorio";
    setSingleData(findIt);
  }, [name]);

  if (!singleData) {
    return <h1> Error </h1>;
  }

  return (
    <>
      {singleData && (
        <>
          <Box className="__vartical" component="section" mt={5}>
            <Container>
              <Row gutter={[24, 24]}>
                <Col lg={12} md={12} xs={24} className="flex ai-c">
                  <Box px={2} py={1}>
                    <Box>
                      <UseSimpleTitle title="Overly" right black />
                    </Box>
                    <Box
                      component="h1"
                      className="__bg__liniear"
                      fontSize="2.8rem"
                      fontWeight={"900"}
                      m={0}
                    >
                      {singleData.title}
                    </Box>
                    <Box
                      py={1}
                      component="h6"
                      fontSize="1.1rem"
                      fontWeight={"600"}
                    >
                      {`catagory : ~${singleData.catagory}`}
                    </Box>
                    <Box
                      component="h6"
                      fontSize="1rem"
                      fontWeight={"600"}
                      pr={1}
                    >
                      {singleData.subTitle}
                    </Box>
                  </Box>
                </Col>
                <Col lg={12} md={12} xs={24}>
                  <Box className="__single__detail__img__box" mr={1}>
                    <img src={singleData.img} className="__img" alt="" />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>

          <UseToDisplayContent
            title="Project details"
            data={singleData.overview}
            img="/assets/case/mind-map.svg"
          />
          <UseToDisplayContent
            title="Team challenging"
            data={singleData.problem}
            img="/assets/case/target.svg"
            wr
          />
          <UseToDisplayContent
            title="Soluation"
            data={singleData.solution}
            img="/assets/case/search.svg"
          />
          <UseItThumb />
          <Footer />
        </>
      )}
    </>
  );
};

type ContentProps = {
  title: string;
  data: string | string[];
  img: string;
  wr?: boolean;
};

const UseToDisplayContent = ({ data, img, title, wr }: ContentProps) => {
  return (
    <Box className="__vartical" component="section">
      <Container>
        <Row
          gutter={[24, 24]}
          className="jc-c"
          style={{ flexDirection: !wr ? "row" : "row-reverse" }}
        >
          <Col lg={12} md={12} xs={24} className="flex ai-c">
            <Box px={2} py={1}>
              <Box fontSize="2.8rem" fontWeight={"900"} m={0}>
                {title}
              </Box>
              <Box pt={2.5}>
                {typeof data === "object" ? (
                  <UseToRanderList data={data} />
                ) : (
                  <Box fontSize="0.9rem" color="gray" fontWeight={"600"}>
                    {data}
                  </Box>
                )}
              </Box>
            </Box>
          </Col>

          <Col lg={11} md={12} xs={24}>
            <Box className="case__img__box" mr={1} p={2}>
              <img src={img} className="__img" alt="" />
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

type ListProps = {
  data: string[];
};
const UseToRanderList = ({ data }: ListProps) => {
  return (
    <Box className="__st__list" pb={3} pr={3} pt={1}>
      <Box component="ul" pt={3} m={0}>
        {data.map((e, i) => (
          <Box
            key={i}
            fontSize="0.9rem"
            color="gray"
            fontWeight={"600"}
            component="li"
          >
            {e}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SingleCaseStudies;
