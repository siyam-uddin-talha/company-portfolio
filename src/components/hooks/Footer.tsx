import React from "react";
import { Box, Container } from "@mui/material";
import { Button, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa";
import { CheckOutlined } from "@ant-design/icons";
import { FiPhoneCall } from "react-icons/fi";

type SocialTypes = {
  icon: React.ReactNode;
  link: string;
};

const Footer = () => {
  const socialLinks: SocialTypes[] = [
    {
      icon: <FaTwitter />,
      link: "https://twitter.com",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/Tekorio-103715315792403",
    },
    {
      icon: <FaPinterestP />,
      link: "https://pinterest.com/",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/tekorio/",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{ background: "#0b0b26" }}
      className="__vartical"
      pb={2}
    >
      <Container>
        <Row gutter={[20, 20]}>
          <Col lg={6} md={8} xs={24}>
            <Box className="__footer__img__box">
              <Link to="/">
                <img src="/icon.png" className="__img" alt="logo" />
              </Link>
            </Box>
            <Box
              fontSize="1rem"
              color="white"
              fontWeight={"500"}
              component="h6"
              pb={3}
            >
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </Box>
            <Box pb={2}>
              <Box className="flex" gap={1.5}>
                {socialLinks.map((e, i) => (
                  <Box key={i} className="__social__single">
                    <a href={`${e.link}`}>
                      <h1>{e.icon}</h1>
                    </a>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>
          <Col lg={5} md={8} xs={24}>
            <Box>
              <Box
                fontSize="1.1rem"
                color="white"
                fontWeight={"700"}
                component="h3"
                pb={3}
              >
                Links
              </Box>
              <Box className="flex fd-c __routes__footer" gap={2}>
                <Box className="flex">
                  <Link to="/about-us" className="__aul_2 ">
                    About us
                  </Link>
                </Box>
                <Box className="flex">
                  <Link to="/case-studies" className="__aul_2">
                    Case studies
                  </Link>
                </Box>
                <Box className="flex">
                  <Link to="/blogs" className="__aul_2">
                    Blogs
                  </Link>
                </Box>
                <Box className="flex">
                  <Link to="/feedback" className="__aul_2">
                    Feedback
                  </Link>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={6} md={8} xs={24}>
            <Box>
              <Box
                fontSize="1.1rem"
                color="white"
                fontWeight={"700"}
                component="h3"
                pb={2}
              >
                Newsletter
              </Box>
            </Box>
            <Box
              fontSize="1rem"
              color="white"
              fontWeight={"500"}
              component="h6"
              py={1}
            >
              Subscribe our newsletter to get our latest update & news.
            </Box>
            <Box>
              <Input.Group compact size="large">
                <Input
                  style={{ width: "80%" }}
                  required
                  placeholder="Your email address"
                />
                <Button type="primary" size="large" icon={<CheckOutlined />} />
              </Input.Group>
            </Box>
          </Col>
          <Col lg={6} md={8} xs={24}>
            <Box className="__routes__footer" pl={1.5} pb={2.5}>
              <Box
                fontSize="1.1rem"
                color="white"
                fontWeight={"700"}
                component="h3"
                pb={3}
              >
                Contact
              </Box>
              <Box className="flex ai-c" gap={1}>
                <Box>
                  <FaLocationArrow color="#0087ca" />
                </Box>
                <Box
                  color="white"
                  fontWeight={"500"}
                  component="h5"
                  className="__aul_2"
                  m={0}
                >
                  30 Commercial Road Fratton, Australia
                </Box>
              </Box>

              <Box className="flex ai-c" py={1} gap={1}>
                <Box>
                  <FiPhoneCall color="#0087ca" />
                </Box>
                <a href="tel:+8898006802">
                  <Box
                    color="white"
                    fontWeight={"500"}
                    component="h5"
                    className="__aul_2"
                    m={0}
                  >
                    + 88 ( 9800 ) 6802
                  </Box>
                </a>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
      <Box borderTop="1px solid #1890ff2e" pt={2.5}>
        <Box
          fontSize="1rem"
          color="white"
          fontWeight={"700"}
          component="h3"
          className="flex ai-c jc-c"
        >
          © All Copyright 2022 by Tekorio
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
