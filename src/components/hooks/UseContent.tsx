import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import React from "react";
import { UseSimpleTitle } from "../hooks/UseTitle";

type Props = {
  title: string;
  subtitle: {
    main: string;
    gradient?: string;
  };
  description: string;
  img: string;
  style?: {
    wr?: boolean;
  };
  more?: React.ReactNode;
};

export const UseSimpleContent = ({
  title,
  subtitle,
  description,
  img,
  style,
  more,
}: Props) => {
  return (
    <section className="__vartical">
      <Container>
        <Row
          justify="center"
          className={style?.wr ? "fw-wr" : "fw-r"}
          gutter={[24, 24]}
        >
          <Col lg={12} md={12} xs={24}>
            <Box>
              <UseSimpleTitle title={title} />
            </Box>
            <Box pr={2}>
              <Box component="h1" fontSize="2.4rem" fontWeight={"900"}>
                {`${subtitle.main} `}
                {subtitle.gradient && (
                  <span className="__bg__liniear">{` ${subtitle.gradient}`}</span>
                )}
              </Box>
            </Box>
            <Box pb={1}>
              <Box component="h2" fontSize="1rem" className="gray">
                {description}
              </Box>
            </Box>
            {more && <Box pb={1}>{more}</Box>}
          </Col>
          <Col lg={10} md={10} xs={21}>
            <Box p={2}>
              <img src={img} className="__img" alt="about us" />
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
