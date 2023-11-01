import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { IService } from "./helper";

type Props = {
  data: IService;
};

const Overview = ({ data }: Props) => {
  return (
    <React.Fragment>
      <Box component={"main"} pb={2}>
        <Container>
          <Row gutter={[24, 24]} justify="center" className="fw-wr">
            <Col lg={10} md={10} xs={22} className="flex ai-c jc-c">
              <Box
                sx={{
                  "& > img": {
                    height: "320px",
                  },
                }}
                p={1.5}
              >
                <img
                  src="/assets/service/pinned.svg"
                  className="__img"
                  alt="overview"
                />
              </Box>
            </Col>

            <Col lg={11} md={11} xs={24}>
              <Box>
                <Box component="h1" fontSize="2.5em" fontWeight={"700"} m={0}>
                  Overview
                </Box>
                <Box py={1.5}>
                  <Box
                    component="h5"
                    color="#323232"
                    fontSize="1.33em"
                    fontWeight={"500"}
                    m={0}
                  >
                    {data.overview}
                  </Box>
                </Box>
                <Box mt={1}>
                  <Link to="/get-touch">
                    <button className="__bt">Get started</button>
                  </Link>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box component={"main"} py={"5rem"}>
        <Container>
          <Row gutter={[24, 24]} justify="center">
            <Col lg={11} md={11} xs={24}>
              <Box>
                <Box component="h1" fontSize="2.5em" fontWeight={"700"} m={0}>
                  Why chose us
                </Box>
                <Box py={1.5}>
                  <Box
                    component="h5"
                    color="#323232"
                    fontSize="1.33em"
                    fontWeight={"500"}
                    m={0}
                  >
                    {data.whyus}
                  </Box>
                </Box>
                <Box mt={1}>
                  <Link to="/get-touch">
                    <button className="__bt">Get Enroll</button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg={10} md={10} xs={22} className="flex ai-c jc-c">
              <Box p={1.5}>
                <img
                  src="/assets/service/why-us.svg"
                  className="__img"
                  alt="whychoseus"
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Overview;
