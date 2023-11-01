import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Col, Row, Tabs } from "antd";
import { WhyUsContent } from "./helper";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

const WhyChoseUs: React.FC = () => {
  const content: WhyUsContent[] = [
    {
      img: "/assets/team-1.jpg",
      tab: "Award winning",
      title: "An Award-Winning Company.",
      subTitle: "Indulge your curiosity.",
      description:
        "An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised the standards in this industry and are a leading cybersecurity.",
    },
    {
      img: "/assets/team-2.jpg",
      tab: "Company mission",
      title: "Fingent’s Four Pillars Of Influence",
      subTitle: "Insight Stands Out",
      description:
        "We have critical compliance designations, including SSAE 18 Type II and PCI, adhering to the strictest industry regulations. We train our staff on HIPAA best practices on behalf of our healthcare clients. We incorporate and maintain advanced monitoring, anti-malware, and authentication tools.",
    },
    {
      img: "/assets/team-3.jpg",
      tab: "Using softwares",
      title: "We eagerly put in use new IT innovations",
      subTitle: "Touching Lives Through Technology",
      description:
        "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment",
    },
  ];

  return (
    <>
      <section
        className="__vartical __why__us"
        style={{ background: "url(/assets/bg-1.jpg)" }}
      >
        <Container>
          <Box pb={5.5}>
            <Box className="flex ai-c jc-c fd-c" textAlign={"center"}>
              <UseSimpleTitle title="Why chose us" right />
              <Col lg={12} md={16} xs={24}>
                <h1 className="__branding">
                  We Serve A Wide <span>Variety</span> Of Industries Technology
                </h1>
              </Col>
            </Box>
          </Box>
          <Row className="_overflow" justify="center">
            <Tabs
              defaultActiveKey="0"
              centered
              tabPosition="top"
              animated={{ inkBar: true, tabPane: true }}
            >
              {content.map((e, i) => (
                <React.Fragment key={e.title}>
                  <TabPane tab={e.tab} key={i}>
                    <Box
                      className="flex jc-sb sm-jc-center fw-w ai-c"
                      pt={5}
                      pb={8}
                      gap={4}
                    >
                      <Col lg={10} md={12} xs={24}>
                        <Box className="_why_us_img_box" ml={1}>
                          <img src={e.img} className="__img" alt="" />
                        </Box>
                      </Col>
                      <Col lg={12} md={12} xs={24}>
                        <Box
                          component="h5"
                          className="c-main"
                          fontSize="1.1rem"
                          fontWeight={"600"}
                          m={0}
                          pb={1}
                        >
                          {e.subTitle}
                        </Box>
                        <Box
                          component="h1"
                          fontSize="2.1rem"
                          fontWeight={"800"}
                        >
                          <>{e.title}</>
                        </Box>
                        <Box component="p" className="gray" fontWeight={"600"}>
                          <>{e.description}</>
                        </Box>
                        <Box>
                          <Link to="/about-us">
                            <button className="__bt">About us</button>
                          </Link>
                        </Box>
                      </Col>
                    </Box>
                  </TabPane>
                </React.Fragment>
              ))}
            </Tabs>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyChoseUs;
