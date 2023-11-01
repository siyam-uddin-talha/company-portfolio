import React, { useState, useDeferredValue, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { Col, Input, Row, Empty } from "antd";
import { CaseStudiesFullData, CaseContentType } from "./helper";
import { Link } from "react-router-dom";
import { LinkParser } from "../utils/Parser";

const UseSearch = (query: string, data: CaseContentType[]) => {
  return data.filter((e: CaseContentType) => {
    const regex = new RegExp(query, "gi");
    return e.title.match(regex) || e.catagory.match(regex);
  });
};

const DisplayContents = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [datas, setDatas] = useState<CaseContentType[]>([]);

  const deferredQuery = useDeferredValue(searchValue);

  useEffect(() => {
    setDatas(CaseStudiesFullData);
  }, []);

  useEffect(() => {
    if (deferredQuery) {
      const searchItems = UseSearch(deferredQuery, CaseStudiesFullData);
      setDatas(searchItems);
    }
    if (!deferredQuery) {
      setDatas(CaseStudiesFullData);
    }
  }, [deferredQuery]);

  return (
    <section
      className="__vartical __case__studie__sector"
      style={{ background: "url(/assets/bg-1.jpg)" }}
    >
      <Branding inputValue={searchValue} setInputValue={setSearchValue} />

      {deferredQuery && datas.length === 0 ? (
        <Box my={5} py={10} sx={{ borderTop: "2px solid #e9e9e9" }}>
          <Empty />
        </Box>
      ) : (
        <Container>
          <Row gutter={[32, 32]}>
            {datas.map((e, i) => (
              <React.Fragment key={i}>
                <Box
                  className="flex fw-w __single__case__studie jc-sb sm-jc-center "
                  width={"100%"}
                  flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
                  my={2}
                  py={2}
                >
                  <Col lg={12} md={12} xs={24}>
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
                          <button className="__bt">Read more</button>
                        </Link>
                      </Box>
                    </Box>
                  </Col>
                  <Col lg={10} md={11} xs={24}>
                    <Box
                      sx={{
                        "& > img": {
                          objectFit: "cover",
                          height: { xs: "250px", sm: "310px" },
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
      )}
    </section>
  );
};

type BrandingProps = {
  inputValue: string;
  setInputValue: Function;
};

const Branding = ({ inputValue, setInputValue }: BrandingProps) => {
  return (
    <Box component={"main"} py={2} pt={5}>
      <Container>
        <Row gutter={[24, 24]} justify="space-between">
          <Col lg={12} md={12} xs={24}>
            <Box
              component="h1"
              className="__bg__liniear"
              fontSize="2rem"
              fontWeight={"800"}
              m={0}
            >
              Case Studies
            </Box>
          </Col>

          <Col lg={10} md={12} xs={20} className="flex ai-c jc-fe ">
            <Box className="w-100">
              <Input
                placeholder="search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default DisplayContents;
