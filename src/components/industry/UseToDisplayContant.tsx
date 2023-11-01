import React from "react";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";

type Props = {
  data: {
    title: string;
    description: string[];
  };
  img: string;
  reverse?: boolean;
};

const UseToDisplayContant = ({ data, reverse, img }: Props) => {
  return (
    <section className="__vartical">
      <Container>
        <Row
          justify="center"
          gutter={[24, 24]}
          style={{ flexDirection: reverse ? "row-reverse" : "row" }}
        >
          <Col lg={11} md={11} xs={24} className="flex ai-c jc-c">
            <Box p={"1em"}>
              <Box>
                <Box
                  component="h1"
                  sx={{ fontSize: { xs: "2.09em", sm: "2.47em" } }}
                  fontWeight={"700"}
                  m={0}
                >
                  {data.title}
                </Box>
              </Box>
              <Box py="1em">
                <Box
                  component={"ul"}
                  p={0}
                  m={0}
                  className="flex fd-c"
                  gap={"1em"}
                >
                  {data.description.map((e, i) => (
                    <Box component="li" sx={{ listStyle: "none" }} key={i}>
                      <Box
                        component="h5"
                        sx={{ fontSize: { xs: "0.9em", sm: "1.1em" } }}
                        fontWeight={"500"}
                        m={0}
                      >
                        {e}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={10} md={11} xs={22} className="flex ai-c jc-c">
            <Box p={"1.5em"}>
              <img className="__img" src={img} alt="" />
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UseToDisplayContant;
