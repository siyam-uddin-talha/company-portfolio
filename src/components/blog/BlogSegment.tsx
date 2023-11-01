import React from "react";

import { Container, Box } from "@mui/material";
import { Avatar, Col, Row } from "antd";
import { IBlog } from "./helper";
import { Link } from "react-router-dom";
import { LinkParser } from "../utils/Parser";

type Props = {
  posts: IBlog[];
};

const BlogSegment = ({ posts }: Props) => {
  return (
    <Box component="main" py={6}>
      <Container>
        <Row gutter={[24, 24]}>
          {posts.map((e, i) => (
            <React.Fragment key={i}>
              <Col lg={8} md={12} xs={24}>
                <Box className="__blog__single">
                  <Box className="blog__img__box">
                    <img src={e.thumb} className="__img" alt={e.title} />
                  </Box>
                  <Box
                    className="blog__info flex fd-c jc-sb"
                    gap={1.5}
                    p={1.5}
                    sx={{
                      minHeight: {
                        xs: 0,
                        sm: "215px",
                        md: "245px",
                      },
                    }}
                  >
                    <Box
                      className="_auther_and_time flex ai-c jc-sb"
                      my={1}
                      px={1}
                    >
                      <Box className="flex ai-c" gap={1}>
                        <Box>
                          <Avatar src={e.autherImg} size="large" />
                        </Box>
                        <Box
                          component="h5"
                          m={0}
                          fontSize="1rem"
                          fontWeight={"400"}
                        >
                          {`by  ${e.author}`}
                        </Box>
                      </Box>
                      <Box
                        component="h6"
                        m={0}
                        fontSize="0.9rem"
                        fontWeight={"400"}
                      >
                        {e.date}
                      </Box>
                    </Box>
                    <Box px={1}>
                      <Link to={`/blog/${LinkParser(e.title)}`}>
                        <Box
                          component="h2"
                          m={0}
                          fontSize="1.1rem"
                          fontWeight={"500"}
                        >
                          {e.title}
                        </Box>
                      </Link>
                    </Box>
                    <Box px={1}>
                      <Box
                        component="h4"
                        m={0}
                        fontSize="0.9rem"
                        color="gray"
                        fontWeight={"500"}
                      >
                        {`${e.subTitle.substr(0, 100)}...`}
                        <Link to={`/blog/${LinkParser(e.title)}`}>more</Link>
                      </Box>
                    </Box>
                    <Box px={1}>
                      <Box
                        component="h3"
                        m={0}
                        fontSize="0.95rem"
                        fontWeight={"600"}
                        textTransform="uppercase"
                      >
                        {e.catagory}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </Box>
  );
};

export default BlogSegment;
