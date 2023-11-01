import React from "react";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

type Props = {
  data: {
    title: string;
    subTitle: string;
  };
};

const Banner = ({ data }: Props) => {
  return (
    <Box
      className="__vartical"
      component={"section"}
      sx={{
        background: `linear-gradient(to bottom, #fdfdffeb, rgb(255 255 255 / 68%) 100%),url(/assets/component.svg)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50vh",
      }}
      mt={"2em"}
    >
      <Container className="h-100">
        <Row className="h-100" justify="center">
          <Col lg={14} md={16} xs={24}>
            <Box textAlign={"center"}>
              <Box
                component="h1"
                sx={{ fontSize: { xs: "2.4em", sm: "2.9em" } }}
                fontWeight={"700"}
                m={0}
              >
                {data.title}
              </Box>
              <Box
                component="h3"
                sx={{ fontSize: { xs: "1em", sm: "1.3em" } }}
                fontWeight={"500"}
                color="gray"
                m={0}
                py={"1em"}
              >
                {data.subTitle}
              </Box>
              <Box>
                <Link to="/get-touch">
                  <button className="__bt">Get in touch</button>
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Banner;
