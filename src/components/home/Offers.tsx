import { Box, Container } from "@mui/material";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { Col, Row } from "antd";

import { AiOutlineApartment } from "react-icons/ai";

import { SiBlockchaindotcom, SiAltiumdesigner } from "react-icons/si";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { RoutingContent } from "../navbar/helper";
import { UseSimpleCards } from "../hooks/UseCards";

const Offers = () => {
  const content: RoutingContent[] = [
    {
      title: "Blockchain",
      subTitle:
        "Tekorio has the best smart blockchain development  systems in the world.",
      route: "/blockchain",
      icon: <SiBlockchaindotcom />,
    },
    {
      title: "Artificial Intelligence",
      subTitle: "Help to gain flexible analytical insights out of their data.",
      route: "/artificial-intelligence",
      icon: <AiOutlineApartment />,
    },
    {
      title: "UX/UI design",
      subTitle: "We create vibrant, intuitive and minimalist web designs.",
      route: "/web-development",
      icon: <SiAltiumdesigner />,
    },
    {
      title: "Mobile apps",
      subTitle: "Providing the best IT solutions for non-IT Application.",
      route: "/mobile-development",
      icon: <HiOutlineDeviceMobile />,
    },
  ];

  return (
    <section className="__vartical">
      <Container>
        <Box>
          <UseSimpleTitle title="What we are offering" />
        </Box>
        <Row className="sm-jc-center" justify="space-between">
          <Col lg={11} md={11} xs={24}>
            <Box>
              <h1 className="__branding">
                Dealing in all Professional <span>IT Services</span>
              </h1>
            </Box>
          </Col>
          <Col lg={11} md={11} xs={24}>
            <Box
              component="p"
              className="gray"
              fontSize="1rem"
              fontWeight={"500"}
            >
              We offers a full-cycle software development services that meet
              varied business requirements from IT strategy consulting to the
              end-to-end development of scalable solutions.
            </Box>
          </Col>
        </Row>

        <UseSimpleCards data={content} />
      </Container>
    </section>
  );
};

export default Offers;
