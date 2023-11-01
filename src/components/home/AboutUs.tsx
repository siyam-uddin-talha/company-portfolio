import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { TbCloudComputing, TbDeviceGamepad2 } from "react-icons/tb";
import { AiOutlineApartment } from "react-icons/ai";
import { RoutingContent } from "../navbar/helper";
import { Link } from "react-router-dom";
import UseAnimatedText from "../hooks/UseAnimatedText";

const content: RoutingContent[] = [
  {
    title: "Game development",
    subTitle: "Unity 2D/3D",
    route: "/services/game-development",
    icon: <TbDeviceGamepad2 />,
  },
  {
    title: "Artificial Intelligence",
    subTitle: "Ai, voice based solution, Data science",
    route: "/services/artificial-intelligence",
    icon: <AiOutlineApartment />,
  },

  {
    title: "Cloud computing",
    subTitle: "IaaS, Pass, Sass",
    route: "/services/cloud-computing",
    icon: <TbCloudComputing />,
  },
];

const AboutUs = () => {
  return (
    <section className="__vartical">
      <Container>
        <Row gutter={[32, 32]} justify="space-between" className="sm-jc-center">
          <Col lg={12} md={12} xs={24}>
            <Box>
              <Box>
                <UseSimpleTitle title="About us" />
              </Box>
              <Box>
                <h1 className="__branding2">
                  Think Big. We made
                  <span>
                    <UseAnimatedText
                      children={[
                        "unique",
                        "It solution",
                        "perfect",
                        "excellent",
                      ]}
                    />
                  </span>
                </h1>
              </Box>
              <Box
                component="h5"
                className="gray"
                fontSize="1rem"
                fontWeight={"500"}
              >
                Technology Service Provider Built for Your Unique Needs. We help
                position your business for future innovation.
              </Box>
              <Box py={2}>
                <Box className="flex fw-w jd-c ai-c" gap={1.5}>
                  {content.map((e) => (
                    <Box
                      key={e.title}
                      className="__about__route__single"
                      borderRadius={3}
                    >
                      <Link to={e.route}>
                        <Box className="flex ai-c" gap={1} py={3} px={2}>
                          <Box component="h3" m={0} className="flex ai-c">
                            {e.icon}
                          </Box>
                          <Box
                            className="_rag"
                            height={"0.9rem"}
                            width={"1px"}
                            sx={{ background: "#1890ff" }}
                          />
                          <Box component="h3" m={0}>
                            <>{e.title + "\n"}</>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={10} md={10} xs={22}>
            <Box>
              <img
                src="/assets/about-us-1.svg"
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
