import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Col, Row } from "antd";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type CountType = {
  title: string;
  parcent: number;
  symbol: string;
};

const WorkingSoution = () => {
  // const [ref, inView] = useInView();

  const contnets: CountType[] = [
    {
      title: "Happy client",
      parcent: 9857,
      symbol: "+",
    },
    {
      title: "Project complete",
      parcent: 10000,
      symbol: "+",
    },
    {
      title: "Repleat client",
      parcent: 90,
      symbol: "%",
    },
    {
      title: "Agile coaches",
      parcent: 50,
      symbol: "+",
    },
  ];

  return (
    <section className="__vartical">
      <Container>
        <Row justify="center">
          <Col lg={22} md={22} xs={23}>
            <Box
              className="client__count flex"
              justifyContent={"center"}
              gap={4}
              flexWrap={"wrap"}
            >
              {contnets.map((e: CountType, i: number) => (
                <Box
                  key={i}
                  className="flex fd-c"
                  sx={{ textAlign: "center", p: { xs: 3, sm: 5 } }}
                >
                  <Box className="_" component="h1" m={0}>
                    <CountUp
                      start={e.parcent - 100 < 0 ? 0 : e.parcent - 100}
                      end={e.parcent}
                      duration={3}
                      redraw={true}
                      suffix={e.symbol}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </Box>
                  <Box className="gray" component="h4" m={0}>
                    {e.title}
                  </Box>
                </Box>
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkingSoution;
