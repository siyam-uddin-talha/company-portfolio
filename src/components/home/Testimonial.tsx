import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Box, Container } from "@mui/material";
import { Button, Col, Row } from "antd";
import Carousel from "react-multi-carousel";
import { FeedbackReview } from "../feedback/helper";
import { UseReviewCard } from "../hooks/UseCards";
import { UseSimpleTitle } from "../hooks/UseTitle";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 778 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 778, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  return (
    <section className="__vartical">
      <Container>
        <Row className="ai-c jc-sb sm-jc-center ">
          <Col lg={11} md={12} xs={24}>
            <Box>
              <UseSimpleTitle title="What our client say's" />
            </Box>
            <Box>
              <h1 className="__branding">
                Here’s what our <span>customers</span> have said.
              </h1>
            </Box>
            <Box component="p" className="gray" fontWeight={"600"} pt={1.5}>
              Simplified IT is designed to help make sure you and your data is
              protected and your computer runs it’s best. The network Access
              provides is valuable.
            </Box>
          </Col>
          <Col lg={12} md={12} xs={24}>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              deviceType="desktop"
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              renderButtonGroupOutside={true}
              arrows={false}
              customButtonGroup={<ButtonGroup />}
            >
              {FeedbackReview.map((e, i) => (
                <UseReviewCard key={i} {...e} />
              )).slice(0, 3)}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  return (
    <Box position={"absolute"} right={10} className="flex" gap={1}>
      <Button
        onClick={() => previous()}
        icon={<ArrowLeftOutlined />}
        shape="circle"
      />

      <Button
        onClick={() => next()}
        icon={<ArrowRightOutlined />}
        shape="circle"
      />
    </Box>
  );
};

export default Testimonial;
