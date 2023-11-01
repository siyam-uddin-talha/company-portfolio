import React from "react";
import { IIndustry } from "./helper";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseHeaderTitle } from "../hooks/UseTitle";

type Props = {
  data: IIndustry;
};

const Soluation = ({ data }: Props) => {
  return (
    <section className="__vartical">
      <Container>
        <Box>
          <UseHeaderTitle
            title={data.solutions.title}
            subTitle={data.solutions.subTitle}
          />
        </Box>
        <Row gutter={[24, 24]} justify="center">
          {data.solutions.explore.map((e, index) => (
            <Col lg={7} md={11} xs={22} key={index}>
              <Box
                className="flex fd-c ai-c jc-c"
                px={"1em"}
                py={"1.5em"}
                textAlign="center"
              >
                <Box
                  sx={{
                    "&>svg": {
                      width: "75px",
                      height: "75px",
                      color: "#1890ff",
                    },
                  }}
                  pb={1}
                >
                  {e.icon}
                </Box>
                <Box>
                  <Box
                    py={"1em"}
                    component="h5"
                    sx={{ fontSize: "1.12em" }}
                    fontWeight={"500"}
                    m={0}
                  >
                    {e.title}
                  </Box>
                  <Box
                    component="h5"
                    sx={{ fontSize: "1em" }}
                    fontWeight={"400"}
                    m={0}
                  >
                    {e.subtitle}
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

export default Soluation;
