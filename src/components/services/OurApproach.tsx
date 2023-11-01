import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import React from "react";
type Props = {
  data: {
    services: {
      title: string;
      description: string;
    }[];
  };
  reverse?: boolean;
  borderLess?: boolean;
};

const OurAproch = ({ data, reverse, borderLess }: Props) => {
  return (
    <Box component="section" pt={"2.5em"} pb={"3.5em"}>
      <Container>
        <Row
          gutter={[24, 24]}
          className="sm-jc-center"
          justify="space-between"
          style={{ flexDirection: reverse ? "row-reverse" : "row" }}
        >
          <Col lg={11} md={11} xs={24} className="pos-rel">
            <Box sx={{ position: "sticky", top: "5rem" }}>
              <Box>
                <Box
                  component="h1"
                  sx={{ fontSize: { xs: "2em", sm: "2.5em" } }}
                  fontWeight={"700"}
                  m={0}
                >
                  Our Approach
                </Box>
                <Box
                  py={1}
                  component="h5"
                  color="#323232"
                  fontWeight={"500"}
                  sx={{ fontSize: { xs: "1.09em", sm: "1.33em" } }}
                  m={0}
                >
                  Tekorio is a professional IT Company that always creates
                  quality software for clients. If you are looking for a team of
                  talent developers to find out the best IT solutions, Tekorio
                  is a company that your team should consider.
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={11} md={11} xs={24}>
            <Box>
              <Box component={"article"} className="flex fd-c" gap={"1.5rem"}>
                {data.services.map((e, i) => (
                  <Box
                    key={i}
                    className="__our__service__single"
                    sx={{ border: borderLess ? "none" : "1px solid #1890ff" }}
                  >
                    <Box>
                      <Box
                        component="h2"
                        fontSize="1.48em"
                        fontWeight={"600"}
                        m={0}
                      >
                        {e.title}
                      </Box>
                      <Box
                        py={1}
                        component="h5"
                        color="#323232"
                        fontSize="1.1em"
                        fontWeight={"500"}
                        m={0}
                      >
                        {e.description}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default OurAproch;
