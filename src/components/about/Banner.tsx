import React from "react";

import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import UseAnimatedText from "../hooks/UseAnimatedText";

const Banner = () => {
  return (
    <Box className="__vartical" component="section" mt={5}>
      <Container>
        <Row justify="center">
          <Col lg={16} md={20} xs={24}>
            {/* ------------------- heading ------------ */}
            <Box className="flex ai-c jc-c">
              <Box>
                <Box
                  component="h1"
                  fontSize="1.1rem"
                  fontWeight={"600"}
                  py={1}
                  textTransform="uppercase"
                  className="flex fw-w"
                  sx={{
                    borderTop: "1px solid #1890ff",
                    borderBottom: "1px solid #1890ff",
                    wordSpacing: 2,
                  }}
                >
                  <Box mr={1}>
                    <UseAnimatedText
                      children={[
                        "Trusted",
                        "Successfull",
                        "The Best",
                        "Professional",
                        "Award winning",
                      ]}
                    />{" "}
                  </Box>
                  SOFTWARE DEVELOPMENT COMPANY
                  {"~"}
                  <span className="__bg__liniear ml-1">SINCE 2015</span>
                </Box>
              </Box>
            </Box>
            {/* --------------------- title ------------------ */}
            <Box pt={2} className="flex ai-c jc-c">
              <Box component="h1" fontSize="2.3rem" fontWeight={"900"}>
                Choose The <span className="__bg__liniear">Best</span> IT
                Service Company
              </Box>
            </Box>
            {/* --------------------- sub title ------------------ */}

            <Box className="flex ai-c jc-c">
              <Box
                component="h3"
                fontSize="1.2rem"
                fontWeight={"400"}
                lineHeight="1"
                className="gray"
              >
                Real Time Dealing in all Professional{" "}
                <span className="__bg__liniear">IT</span>. Solutions & Services
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Banner;
