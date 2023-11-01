import React from "react";
import { ITechnology } from "./helper";

import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";

type Props = {
  data: ITechnology;
};

const WhyThis = ({ data }: Props) => {
  return (
    <Box>
      <Box pb={"2.5em"}>
        <Container>
          <Box className="flex ai-c jc-c fd-c">
            <UseSimpleTitle title="Choose " />
            <Box m={0} className="__branding" textTransform={"capitalize"}>
              {`Why ${data.catagory}`}
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Row gutter={[32, 32]}>
          {data.whyThis.map((e, i) => (
            <React.Fragment key={i}>
              <Box
                className="flex ai-c fw-w jc-sb sm-jc-center "
                width={"100%"}
                component="main"
                flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
                my={2}
                py={2}
              >
                <Col lg={12} md={12} xs={24} className="flex ai-c">
                  <Box p={2}>
                    <Box component="h3" fontSize="1.4rem" fontWeight={"600"}>
                      {e.title}
                    </Box>
                    <Box
                      component="h6"
                      fontSize="1rem"
                      fontWeight={"600"}
                      pr={1}
                      pt={1}
                    >
                      {e.subTitle}
                    </Box>
                  </Box>
                </Col>
                <Col lg={10} md={11} xs={24}>
                  <Box
                    sx={{
                      "& > img": {
                        objectFit: "contain",
                        height: { xs: "280px", sm: "300px", md: "360px" },
                      },
                    }}
                  >
                    <img src={e.img} className="__img" alt="" />
                  </Box>
                </Col>
              </Box>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </Box>
  );
};

export default WhyThis;
