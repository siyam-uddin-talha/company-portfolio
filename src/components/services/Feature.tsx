import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { IService } from "./helper";

type Props = {
  data: IService;
};

const Feature = ({ data }: Props) => {
  return (
    <section className="__vartical">
      <Container>
        <Box pb={"2.7em"}>
          <UseSimpleTitle title="Features" />
          <Box className="__branding" lineHeight={"1"}>
            Topic Features
          </Box>
        </Box>
        <Row gutter={[24, 24]} className="md-jc-center">
          {data.topDemand.map((e, i) => (
            <Col lg={8} md={10} sm={12} xs={24} key={i}>
              <Box
                className="service__feature__single__box __card__service__2"
                py={"1.2em"}
                px={"1.5em"}
                sx={{
                  minHeight: {
                    xs: 0,
                    sm: "200px",
                    md: "215px",
                  },
                }}
              >
                <Card {...e} />
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Card = (e: { title: string; subTitle: string; link?: string }) => {
  const [more, setMore] = useState(false);

  return (
    <Box>
      <Box component="h2" fontSize="1.48em" fontWeight={"600"} m={0}>
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
        {e.subTitle.substr(0, more ? e.subTitle.length : 120)}
        <Box
          component="span"
          color="#1890ff"
          ml={1}
          sx={{ cursor: "pointer" }}
          onClick={() => setMore(!more)}
        >
          {more ? "...less" : "...more"}
        </Box>
      </Box>
      {e.link && (
        <Box className="flex ai-c jc-fe">
          <Link to={e.link}>
            <BsArrowRight />
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Feature;
