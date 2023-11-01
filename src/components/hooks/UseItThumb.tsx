import React from "react";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { UseRandomImage } from "../utils/UseImage";

const UseItThumb = () => {
  return (
    <Box component="main" sx={{ background: "#0F0F35" }}>
      <Container sx={{ py: 2 }}>
        <Row justify="space-between" gutter={[16, 16]}>
          <Col lg={16} md={18} xs={24}>
            <Box
              component="h1"
              fontWeight={"800"}
              className="__branding"
              color="white"
              m={0}
              sx={{ fontSize: { xs: "1.52rem", sm: "1.9rem" } }}
            >
              Looking for the Best IT Business <span>Solutions</span> ?
            </Box>
            <Box
              component="h6"
              color="white"
              fontWeight={"500"}
              sx={{ fontSize: { xs: "0.88rem", sm: "1rem" } }}
            >
              We’re here to help to grow your business.
            </Box>
          </Col>
          <Col lg={5} md={5} xs={24} className="flex ai-c">
            <Box className="flex ai-c" justifyContent={"flex-end"}>
              <Link to="/get-touch">
                <button className="__bt__white">Get started</button>
              </Link>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export const UseLetGetStarted = () => {
  return (
    <Box
      component="main"
      sx={{
        background: `linear-gradient(#0F0F35, #0f0f35ad 100%),url(${UseRandomImage(
          "computer"
        )})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      py={3}
    >
      <Container>
        <Box className="flex fd-c ai-c jc-c">
          <Box
            component="h6"
            fontSize="1rem"
            m={0}
            color="white"
            fontWeight={"500"}
          >
            Let's try to build some interesting
          </Box>
          <Box
            py={1}
            component="h1"
            fontSize="2.2rem"
            fontWeight={"800"}
            className="__branding"
            color="white"
            letterSpacing={"1px"}
            m={0}
          >
            Let Get Started
          </Box>
          <Box py={1}>
            <Link to="/get-touch">
              <button className="__bt__white">Inquire now</button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UseItThumb;
