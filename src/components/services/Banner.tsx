import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

type Props = {
  data: {
    bannerImage: string;
    title: string;
    subTitle: string;
  };
};

const Banner = ({ data }: Props) => {
  return (
    <>
      <Box
        component={"section"}
        className="__our__service __vartical"
        sx={{
          background: `linear-gradient(to bottom, #4e54c8, rgb(0 0 0 / 42%) 100%),url(${data.bannerImage})`,
          height: "90vh",
        }}
        mt={4}
      >
        <Container className="h-100">
          <Row className="h-100">
            <Col lg={12} md={12} xs={24} className="flex ai-c">
              <Box>
                <Box
                  component="h1"
                  fontWeight={"700"}
                  color="white"
                  sx={{ fontSize: { xs: "2.1em", sm: "2.5em" } }}
                  m={0}
                >
                  {data.title}
                </Box>
                <Box
                  py={1.5}
                  component="h4"
                  fontSize="1.1em"
                  fontWeight={"400"}
                  color="white"
                  m={0}
                >
                  {data.subTitle}
                </Box>
                <Box py={1.5}>
                  <Link to="/get-touch">
                    <button className="__bt__white">Enroll now</button>
                  </Link>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
