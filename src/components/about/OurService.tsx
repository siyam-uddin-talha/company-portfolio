import React from "react";
import { Col, Row } from "antd";

import { GiProcessor } from "react-icons/gi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { AiOutlineApartment, AiOutlineMacCommand } from "react-icons/ai";
import { Box, Container } from "@mui/material";

import { SiBlockchaindotcom, SiAltiumdesigner } from "react-icons/si";
import { RoutingContent } from "../navbar/helper";
import { UseSimpleTitle } from "../hooks/UseTitle";

const content: RoutingContent[] = [
  {
    title: "Embedded",
    subTitle:
      "Enclose closely in or as if in a matrix fossils embedded in stone",
    route: "/blockchain",
    icon: <GiProcessor />,
  },
  {
    title: "Game console",
    subTitle:
      "It is the art of creating games and describes the design, development and release of a game.",
    route: "/blockchain",
    icon: <TbDeviceGamepad2 />,
  },
  {
    title: "Blockchain",
    subTitle:
      "Infetech has the best smart blockchain development  systems in the world.",
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
  {
    title: "Machine Learning",
    subTitle: "Data structure, Algorithom",
    route: "/machine-learning",
    icon: <AiOutlineMacCommand />,
  },
];

const OurService = () => {
  return (
    <section className="__vartical">
      <Container>
        <Box py={3}>
          <Row>
            <Col lg={12} md={16} xs={24}>
              <Box>
                <UseSimpleTitle title="We are providing" />
              </Box>
              <Box pt={1} component="h1" fontSize="1.9rem" fontWeight={"900"}>
                Better IT Solutions & Services at your Fingertips
              </Box>
            </Col>
          </Row>
        </Box>
        <Row gutter={[16, 16]}>
          {content.map((e) => (
            <Col lg={8} md={12} xs={24} key={e.title}>
              <Box
                className="__card__service"
                sx={{ boxShadow: "0 0 20px 2px #e3e3e3", px: 3, py: 3 }}
              >
                <Box component="h2" fontSize="1rem" fontWeight={"700"}>
                  {e.title}
                </Box>
                <Box component="h6" fontSize="0.9rem" fontWeight={"500"}>
                  {e.subTitle}
                </Box>
                <Box pt={1} className="flex ai-c" justifyContent={"flex-end"}>
                  <Box component="h1" fontSize="1.5rem">
                    {e.icon}
                  </Box>
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurService;
