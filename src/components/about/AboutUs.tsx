import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { AiOutlineCheck } from "react-icons/ai";

const AboutUs = () => {
  return (
    <section className="__vartical">
      <Container>
        <Row justify="center" className="fw-wr" gutter={[24, 24]}>
          <Col lg={12} md={12} xs={24}>
            <Box>
              <UseSimpleTitle title="About Your Company" />
            </Box>
            <Box pr={2}>
              <Box component="h1" fontSize="2.4rem" fontWeight={"900"}>
                We're Partner of Your{" "}
                <span className="__bg__liniear">Innovations</span>
              </Box>
            </Box>
            <Box pb={1}>
              <Box component="h2" fontSize="1rem" className="gray">
                Tekorio is a provider of IT consulting and software development
                services. We have helped organizations and companies improve
                business performance & enhance their competitiveness.
              </Box>
            </Box>
            <Box>
              <Box className="flex ai-c" gap={1.5}>
                <AiOutlineCheck color="#1890ff" />
                <Box component="h4" fontSize="1rem">
                  Best quality support
                </Box>
              </Box>
              <Box className="flex ai-c" gap={1.5}>
                <AiOutlineCheck color="#1890ff" />
                <Box component="h4" fontSize="1rem">
                  Serve the best
                </Box>
              </Box>
              <Box className="flex ai-c" gap={1.5}>
                <AiOutlineCheck color="#1890ff" />
                <Box component="h4" fontSize="1rem">
                  Money back guarantee
                </Box>
              </Box>
              <Box className="flex ai-c" gap={1.5}>
                <AiOutlineCheck color="#1890ff" />
                <Box component="h4" fontSize="1rem">
                  Trusted Professionals
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={10} md={10} xs={21}>
            <Box p={2}>
              <img
                src="/assets/about-us-2.svg"
                className="__img"
                alt="about us"
              />
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
