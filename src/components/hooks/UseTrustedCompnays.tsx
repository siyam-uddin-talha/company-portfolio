import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Row } from "antd";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 778 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 778, min: 0 },
    items: 3,
  },
};

const UseTrustedCompnays = () => {
  return (
    <section className="__vartical">
      <Container>
        <Row justify="center">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            centerMode={false}
            autoPlay={true}
            deviceType="desktop"
            autoPlaySpeed={300}
            keyBoardControl={true}
            transitionDuration={1000}
            arrows={false}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
              <React.Fragment key={i}>
                <Box width={"122px"}>
                  <img
                    className="__img"
                    src={`/assets/icons/company-${e}.svg`}
                    alt="client"
                  />
                </Box>
              </React.Fragment>
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default UseTrustedCompnays;
