import React from "react";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { AboutShowContent } from "./helper";
import { UseSimpleTitle } from "../hooks/UseTitle";

const AboutShow = () => {
  const content: AboutShowContent[] = [
    {
      img: "/assets/icons/icon-1.png",
      title: "natural code",
      subTitle: "code from scrach",
    },
    {
      img: "/assets/icons/icon-2.png",
      title: "happy code",
      subTitle: "code with joy",
    },
    {
      img: "/assets/icons/icon-3.png",
      title: "hard code",
      subTitle: "make sense",
    },
    {
      img: "/assets/icons/icon-4.png",
      title: "coffee code",
      subTitle: "make fresh",
    },
    {
      img: "/assets/icons/icon-5.png",
      title: "soft code",
      subTitle: "light code",
    },
    {
      img: "/assets/icons/icon-6.png",
      title: "rust code",
      subTitle: "make expensive",
    },
  ];

  return (
    <>
      <section className="__vartical">
        <Container>
          <Row justify="center" gutter={[32, 32]}>
            <Col lg={12} md={13} xs={23} className="flex ai-c">
              <Box className="flex fw-w show__box sm-jc-center">
                {content.map((e) => (
                  <Box
                    key={e.title}
                    className="flex ai-c show__single"
                    gap={1.5}
                    width={"11.2rem"}
                    p={2}
                    py={3}
                    sx={{
                      borderTop: "1px solid whitesmoke",
                      borderBottom: "1px solid whitesmoke",
                    }}
                  >
                    <Box>
                      <img
                        src={e.img}
                        className="__show__image"
                        alt={e.title}
                      />
                    </Box>
                    <Box>
                      <h2>{e.title}</h2>
                      <h4>{e.subTitle}</h4>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Col>
            <Col lg={11} md={11} xs={23}>
              <Box>
                <UseSimpleTitle title="Our Partners" />
                <Box>
                  <h1 className="__branding">
                    Long Time Project, with Our <span>Best Partner</span>
                  </h1>
                </Box>
                <Box py={1}>
                  <Box
                    component="p"
                    className="gray"
                    fontSize="1rem"
                    fontWeight={"500"}
                  >
                    We’ve been lucky to collaborate with a long list of
                    customers, located in and out of the country. Thanks to them
                    we have grown as professionals
                  </Box>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutShow;
