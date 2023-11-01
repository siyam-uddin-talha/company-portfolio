import React, { useState, useEffect } from "react";

import { Backdrop, Box } from "@mui/material";
import { Container } from "@mui/system";
import { Col, Row } from "antd";
import { BsPlay } from "react-icons/bs";

const CompanyReviewVideo = () => {
  const [openVideo, setOpenVideo] = useState<boolean>(false);

  useEffect(() => {
    if (openVideo) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openVideo]);

  return (
    <>
      <section
        className="__vartical __company__review pos-rel _overflow"
        style={{
          background: `linear-gradient(to right, #4e54c8, rgba(255, 54, 124, 0.42) 100%), url("/assets/bg-2.jpg")`,
        }}
      >
        <Box className="__vartical_rag" />
        <Container>
          <Row>
            <Col lg={12} md={12} xs={24}>
              <Box className=" flex fd-c">
                <Box className="flex">
                  <Box
                    className="play__button flex ai-c jc-c"
                    onClick={() => setOpenVideo(true)}
                  >
                    <BsPlay size={40} color="#1890ff" />
                  </Box>
                </Box>
                <Box
                  component="h5"
                  pt={3}
                  fontSize="1rem"
                  color="white"
                  fontWeight={"600"}
                  m={0}
                >
                  Do You Need a Meeting?
                </Box>
                <Box>
                  <Box component="h1" className="__branding" color="white">
                    Save Time and Money with a Top <span>IT</span> Solution
                    Agency
                  </Box>
                </Box>
              </Box>
            </Col>
            <Col lg={12} md={12} xs={24}></Col>
          </Row>
        </Container>
      </section>

      <Backdrop
        sx={{ zIndex: 999999999 }}
        open={openVideo}
        style={{ zIndex: 999999999 }}
        onClick={() => setOpenVideo(!openVideo)}
      >
        <Box sx={{ width: { md: "60%", xs: "100%" } }} px={2}>
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/cIRxRM5M8Ds?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
      </Backdrop>
    </>
  );
};

export default CompanyReviewVideo;
