import { Box, Container } from "@mui/material";
import { Row, Col } from "antd";
import React from "react";
import Carousel from "react-multi-carousel";
import { UseSingleCard } from "../hooks/UseCards";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { CaseStudiesContents } from "./helper";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 778 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 778, min: 0 },
    items: 1,
  },
};

const CaseStudies = () => {
  return (
    <section className="__vartical">
      <Container>
        <Box justifyContent={"flex-end"} className="flex" mb={4}>
          <Col lg={12} md={16} xs={24} className="flex fd-c ai-e">
            <UseSimpleTitle right title="Our case studies" />
            <Box textAlign={"end"}>
              <h1 className="__branding">
                Technology Is <span>Transforming</span> Every Industry Sector
              </h1>
            </Box>
          </Col>
        </Box>

        <Row justify="center">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            deviceType="desktop"
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
          >
            {CaseStudiesContents.map((e, i) => (
              <UseSingleCard key={i} {...e} />
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default CaseStudies;
