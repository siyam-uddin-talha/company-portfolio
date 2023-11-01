import React from "react";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { IIndustry } from "./helper";
import { UseHeaderTitle } from "../hooks/UseTitle";

type Props = {
  data: IIndustry;
};

const Benefits = ({ data }: Props) => {
  return (
    <section className="__vartical">
      <Container>
        <Box>
          <UseHeaderTitle
            title={data.benefit.title}
            subTitle={data.benefit.subTitle}
          />
        </Box>
        <Row gutter={24} justify="center" className="gap-5">
          {data.benefit.explore.map((e, index) => (
            <Col lg={7} md={11} xs={22} key={index}>
              <Box className="flex fd-c ai-c jc-c" px={"1em"} py={"1.5em"}>
                <Box
                  sx={{
                    "&>svg": {
                      width: "65px",
                      height: "65px",
                      color: "#1890ff",
                    },
                  }}
                  className="__industry__alj"
                >
                  {e.icon}
                </Box>
                <Box>
                  <Box
                    py={"1em"}
                    component="h5"
                    sx={{ fontSize: "1em" }}
                    fontWeight={"500"}
                    m={0}
                  >
                    {e.title}
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

export default Benefits;
