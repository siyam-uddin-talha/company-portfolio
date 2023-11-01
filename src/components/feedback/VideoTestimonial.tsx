import React, { useEffect, useState } from "react";
import { Backdrop, Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseHeaderTitle } from "../hooks/UseTitle";
import UseRandomImage from "../hooks/UseRandomImage";
import { BsPlayCircle } from "react-icons/bs";

type VideoType = {
  iframe: React.ReactNode;
  img: string;
};

const videos: VideoType[] = [
  {
    iframe: (
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/8LSt8_11wbQ?controls=0"
        title="YouTube video player"
        frameBorder="0"
      />
    ),
    img: UseRandomImage("/women"),
  },
  {
    iframe: (
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/HSgjpQBkR0c?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    ),
    img: UseRandomImage("/user"),
  },

  {
    iframe: (
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/cIRxRM5M8Ds?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    ),
    img: UseRandomImage("/girl"),
  },
];

const VideoTestimonial = () => {
  return (
    <section className="__vartical">
      <Container>
        <Box>
          <UseHeaderTitle
            title={"Our clients say on Clutch"}
            subTitle={"Clients' video testimonials"}
          />
        </Box>
        <Row gutter={[24, 24]}>
          {videos.map((e, index) => (
            <Col key={index} lg={8} md={12} xs={24}>
              <Render {...e} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Render = ({ iframe, img }: VideoType) => {
  const [openVideo, setOpenVideo] = useState<React.ReactNode>(null);

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
      <Box className="pos-rel">
        <Box sx={{ "& > img": { height: "260px", objectFit: "cover" } }}>
          <img src={img} alt="" className="__img" />
        </Box>
        <Box
          className="play__button flex ai-c jc-c "
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: "0.6",
            background: "#1890ff",
          }}
          onClick={() => setOpenVideo(iframe)}
        >
          <Box sx={{ cursor: "pointer" }}>
            <BsPlayCircle color="white" size={40} />
          </Box>
        </Box>
      </Box>

      <Backdrop
        sx={{ zIndex: 999999999 }}
        open={openVideo ? true : false}
        style={{ zIndex: 999999999 }}
        onClick={() => setOpenVideo(null)}
      >
        <Box sx={{ width: { md: "60%", xs: "100%" } }} px={2}>
          {openVideo}
        </Box>
      </Backdrop>
    </>
  );
};

export default VideoTestimonial;
