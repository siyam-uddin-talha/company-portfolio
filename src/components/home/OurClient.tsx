import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Col, Row } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";

const OurClient = () => {
  return (
    <section className="__vartical">
      <Container>
        <UseSimpleTitle title="Trusted by world wide" />
        <Box pt={6} />

        <Row>
          <Col span={24}>
            <Box className="flex fw-w jc-c" sx={{ gap: { xs: 4, sm: 3 } }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
                <React.Fragment key={i}>
                  <Box width={"122px"}>
                    <img
                      className="__img"
                      src={`/assets/icons/company-${e}.svg`}
                      alt="client"
                    />
                  </Box>
                  <Box sx={{ width: { xs: "0", sm: "10rem" } }} />
                </React.Fragment>
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurClient;
