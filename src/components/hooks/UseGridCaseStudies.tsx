import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";

import { CaseStudiesFullData, CaseContentType } from "../case-studies/helper";
import { Link } from "react-router-dom";
import { LinkParser } from "../utils/Parser";
import { UseSimpleTitle } from "./UseTitle";

const UseGridCaseStudies = () => {
  const history = useLocation();
  const [data, setData] = useState<CaseContentType[]>([]);

  useEffect(() => {
    const container: CaseContentType[] = [];

    for (let index = 0; index < CaseStudiesFullData.length - 1; index++) {
      const element =
        CaseStudiesFullData[
          Math.floor(Math.random() * CaseStudiesFullData.length)
        ];
      const find = container.find((e) => e.title === element.title);
      if (container.length === 3) {
        break;
      }
      if (!find) {
        container.push(element);
      }
    }

    setData(container);
  }, [history.pathname]);

  return (
    <Box className="__vartical">
      <Container>
        <Box mb={3}>
          <UseSimpleTitle title="Case studies" />
          <Box className="__branding" lineHeight={"1"}>
            {" "}
            Storys
          </Box>
        </Box>

        <Row justify="center" gutter={[16, 16]}>
          <Col lg={16} md={20} xs={24}>
            {data
              .map((e, i) => (
                <Box
                  className="flex fw-w jc-sb"
                  gap={"1em"}
                  mt={"1em"}
                  sx={{ boxShadow: "0 0 5px 2px #ebebeb" }}
                  py={"1.2em"}
                  px={"1em"}
                  key={i}
                  flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
                >
                  <Col lg={13} md={12} xs={24}>
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
                      <Box pt={1}>
                        <Link to={`${e.route}${LinkParser(e.title)}`}>
                          <button className="__bt">Learn more</button>
                        </Link>
                      </Box>
                    </Box>
                  </Col>
                  <Col lg={10} md={11} xs={23}>
                    <Box
                      sx={{
                        "& > img": {
                          objectFit: "cover",
                          height: { xs: "230px", sm: "250px" },
                        },
                      }}
                    >
                      <img src={e.img} className="__img" alt="" />
                    </Box>
                  </Col>
                </Box>
              ))
              .slice(0, 2)}
          </Col>
          <Col lg={8} md={20} xs={24} className="mt-2 h-100">
            {data
              .map((e, i) => (
                <Box
                  key={i}
                  className="flex fw-w "
                  gap={"1em"}
                  flexDirection="column"
                  sx={{ boxShadow: "0 0 5px 2px #ebebeb" }}
                >
                  <Box
                    p={"1em"}
                    sx={{
                      "& > img": {
                        objectFit: "cover",
                        height: { xs: "230px", sm: "250px" },
                      },
                    }}
                  >
                    <img src={e.img} className="__img" alt="" />
                  </Box>
                  <Box>
                    <Box p={2} pt={0}>
                      <Box
                        component="h3"
                        m={0}
                        fontSize="1.4rem"
                        fontWeight={"600"}
                      >
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
                      <Box pt={1}>
                        <Link to={`${e.route}${LinkParser(e.title)}`}>
                          <button className="__bt">Learn more</button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))
              .slice(2, 4)}
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default UseGridCaseStudies;
