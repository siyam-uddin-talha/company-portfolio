import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { Col, Row, Carousel } from "antd";
import { BannerContent } from "./helper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const content: BannerContent[] = [
  {
    img: "/assets/banner-1.svg",
    title: "Game console",
    subTitle:
      "It is the art of creating games and describes the design, development and release of a game",
    route: "/services/game-development",
  },
  {
    img: "/assets/banner-2.svg",
    title: "Web development",
    subTitle: "We providing you the best opportunity to learn full stack",
    route: "/services/web-development",
  },
  {
    img: "/assets/banner-3.svg",
    title: "Mobile - Andorid & IOS",
    subTitle:
      "Learn to building mobile applicatation by Java, Kotlin, Flutter & React-Native",
    route: "/services/mobile-development",
  },
  {
    img: "/assets/banner-4.svg",
    title: "Artificial Intelligence",
    subTitle: "Machine learning concepts to build AI solutions",
    route: "/services/artificial-intelligence",
  },
  {
    img: "/assets/banner-5.svg",
    title: "Blockchain development",
    subTitle: "Crypto currency, NFT, Wallet,Chaining,Ethereum Bitcoin etc",
    route: "/services/blockchain",
  },
];

const Banner = () => {
  // const [animatedIndex, setAnimatedIndex] = useState(0);
  const [animate, setAnimate] = useState<boolean>(false);

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setAnimatedIndex((i) => {
  //       if (i === content.length - 1) {
  //         return 0;
  //       }
  //       return i + 1;
  //     });
  //   }, 4000);
  //   return () => clearTimeout(intervalId);
  // }, []);

  // const singleContent = content[animatedIndex];

  // const handleAfterChange = () => {
  //   console.log("after change");
  // };

  React.useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Carousel
        className="__banner__carousel"
        draggable
        dotPosition="right"
        autoplay
        // dots={false}
        // effect="fade"
        afterChange={() => setAnimate(true)}
        beforeChange={() => setAnimate(false)}
      >
        {content.map((item, index) => (
          <Box
            component="section"
            className="__banner__sector pos-rel"
            sx={{ height: { xs: "calc(110vh)", sm: "calc(100vh)" } }}
            key={index}
          >
            <BGAnimation />
            <Box
              position="absolute"
              className="__banner__display"
              sx={{
                top: {
                  xs: "calc(20%)",
                  sm: "calc(40% - 120px)",
                },
              }}
            >
              <Container>
                <Row
                  gutter={[24, 24]}
                  className="flex sm-jc-center"
                  justify="center"
                >
                  <Col lg={10} md={10} xs={19}>
                    <Box
                      overflow={"hidden"}
                      sx={{
                        "& > img": {
                          objectFit: "contain",
                          height: { xs: "350px", sm: "400px", md: "500px" },
                        },
                      }}
                    >
                      <motion.img
                        className="__img"
                        initial={{ opacity: 0 }}
                        animate={animate ? "anim" : "initial"}
                        // transition={{
                        //   duration: 2.5,
                        // }}
                        variants={{
                          initial: { opacity: 0 },
                          anim: { opacity: 1 },
                        }}
                        src={item.img}
                        alt="content"
                      />
                    </Box>
                  </Col>
                  <Col lg={12} md={12} xs={24} className=" flex ai-c jc-c">
                    <Box px={4} sx={{ py: { xs: 7, sm: 3 } }}>
                      <Box className="banner__content ">
                        <Box className="_overflow" py={1}>
                          <motion.h1
                            initial={false}
                            animate={animate ? "anim" : "initial"}
                            variants={{
                              initial: { y: "150%" },
                              anim: { y: 0 },
                            }}
                          >
                            {item.title}
                          </motion.h1>
                        </Box>
                        <Box className="_overflow" py={1}>
                          <motion.h4
                            initial={{ x: "-200%" }}
                            animate={animate ? "anim" : "initial"}
                            variants={{
                              initial: { x: "-200%" },
                              anim: { x: 0 },
                            }}
                            transition={{
                              duration: 0.8,
                            }}
                            className="_overflow"
                          >
                            {item.subTitle}
                          </motion.h4>
                        </Box>
                        <Box className="_overflow" py={2} mb={2.5}>
                          <motion.div
                            initial={{ x: "-200%" }}
                            animate={animate ? "anim" : "initial"}
                            variants={{
                              initial: { x: "-200%" },
                              anim: { x: 0 },
                            }}
                            className="_overflow"
                            transition={{
                              duration: 0.8,
                            }}
                          >
                            <Link to={item.route}>
                              <button className="__bt">Learn more</button>
                            </Link>
                          </motion.div>
                        </Box>
                      </Box>
                    </Box>
                  </Col>
                </Row>
              </Container>
            </Box>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

const BGAnimation = () => {
  return (
    <>
      <div className="__area">
        <ul className="__circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Banner;
