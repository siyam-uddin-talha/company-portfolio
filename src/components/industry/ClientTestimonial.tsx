import React from "react";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import Carousel from "react-multi-carousel";
import { FeedbackReview } from "../feedback/helper";
import { UseReviewCard } from "../hooks/UseCards";
import { UseHeaderTitle } from "../hooks/UseTitle";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 778 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 778, min: 0 },
    items: 1,
  },
};

const ClientTestimonial = () => {
  return (
    <section>
      <Container>
        <Box>
          <UseHeaderTitle
            title={"What our clients say about us"}
            subTitle={"Our worldwide client"}
          />
        </Box>
        <Row justify="center">
          <Col lg={14} md={14} xs={24}>
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
            >
              {FeedbackReview.map((e, i) => (
                <UseReviewCard key={i} {...e} />
              )).slice(0, 4)}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientTestimonial;
