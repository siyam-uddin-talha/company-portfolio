import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { BlogData, IBlog } from "./helper";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { BiChevronsRight } from "react-icons/bi";
import { Row, Col, Avatar } from "antd";
import { BsCalendar3Week } from "react-icons/bs";
import Random3Blogs from "./Random3Blogs";
import Footer from "../hooks/Footer";
import { LinkParser } from "../utils/Parser";

type Props = {
  blog: IBlog;
};

const ReadSingleBlog = () => {
  const { read } = useParams();

  const [singleData, setSingleData] = useState<IBlog>();

  useLayoutEffect(() => {
    const findIt = BlogData.find((e) => {
      const regex = new RegExp(read as string, "gi");
      return LinkParser(e.title).match(regex) || read === LinkParser(e.title);
    });

    document.title = findIt
      ? `${findIt.title} | Tekorio `
      : "Our company | Tekorio";
    setSingleData(findIt);
  }, [read]);

  if (!singleData) {
    return <h1> Error </h1>;
  }

  return (
    <>
      <Header blog={singleData} />
      <Banner blog={singleData} />
      <ReadArticale blog={singleData} />
      <RelatedBlogs />
      <Footer />
    </>
  );
};

const Header = ({ blog }: Props) => {
  return (
    <Box className="__vartical" component="section" mt={3.5} pb={2}>
      <Container>
        <Box>
          <Box className="flex ai-c">
            <Link to="/">
              <Box className="flex ai-c">
                <RiHome2Line size={16} color="#1890ff" />
                <Box pl={1}>
                  <UseText2 text="Home" />
                </Box>
              </Box>
            </Link>
            <Box className="flex ai-c" mx={1}>
              <BiChevronsRight size={16} color="#1890ff" />
            </Box>
            <Box>
              <Link to={"/blogs"}>
                <UseText2 text={"blogs"} />
              </Link>
            </Box>
            <Box className="flex ai-c">
              <Box className="flex ai-c" mx={1}>
                <BiChevronsRight size={16} color="#1890ff" />
              </Box>
              <UseText2 text={blog.title} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Banner = ({ blog }: Props) => {
  return (
    <section>
      <Container style={{ padding: 0, margin: 0 }} maxWidth="xl">
        <Row justify="space-between">
          <Col lg={12} md={12} xs={24}>
            <Box
              sx={{
                "& > img": {
                  objectFit: "cover",
                  height: { xs: "350px", sm: "400px", md: "500px" },
                },
              }}
            >
              <img src={blog.thumb} className="__img" alt="" />
            </Box>
          </Col>
          <Col lg={12} md={12} xs={0} className="flex ai-c">
            <Box sx={{ ml: { xs: "0", sm: 9 }, p: { xs: 1.5, sm: 4 } }}>
              <Box>
                <Box component="h1" fontSize="1.9rem" fontWeight={"700"} m={0}>
                  {blog.title}
                </Box>
                <Box mt={1}>
                  <Box className="flex ai-c" gap={1}>
                    <Box>
                      <Avatar src={blog.autherImg} size="large" />
                    </Box>
                    <Box
                      component="h5"
                      m={0}
                      fontSize="1rem"
                      fontWeight={"400"}
                    >
                      {`writeen by  ${blog.author}`}
                    </Box>
                  </Box>
                </Box>
                <Box
                  pt={1}
                  component="h2"
                  fontSize="1.2rem"
                  fontWeight={"600"}
                  m={0}
                  className="__bg__liniear"
                >
                  {`#${blog.catagory}`}
                </Box>
                <Box
                  pt={1}
                  component="h3"
                  fontSize="0.9rem"
                  fontWeight={"400"}
                  m={0}
                >
                  <BsCalendar3Week /> {blog.date}
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ReadArticale = ({ blog }: Props) => {
  return (
    <Box component="main" py={3}>
      <Container>
        <Row>
          <Box sx={{ ml: { xs: 0, sm: 5, md: 9 } }}>
            <Row gutter={[26, 26]}>
              <Col lg={18} md={18} xs={24} className="__blog__article__">
                <Box sx={{ px: { xs: 0, sm: 1, md: 1.8 } }}>
                  <Box>
                    {/* ------------ Overview ---------------- */}
                    <UseText3 text="Overview" />
                    {/*------------------- subtitle ---------------- */}
                    <Box my={1.5}>
                      <UseText4 text={blog.subTitle} />
                    </Box>
                    {/* ---------------------- topic list --------------------- */}
                    <Box className="topic__box">
                      <Box
                        component="span"
                        fontSize="1.15rem"
                        fontWeight={"600"}
                        mb={1}
                      >
                        Topic
                      </Box>
                      <Box component="ul" m={0}>
                        {blog.topic.map((e, i) => (
                          <Box
                            component={"li"}
                            sx={{
                              listStyle: "none",
                              textDecoration: "underline",
                              textDecorationColor: "gray",
                            }}
                            key={i}
                          >
                            <a href={`#${LinkParser(e)}`}>{e}</a>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    {/*---------------- article render ----------- */}
                    <Box>
                      <Box>
                        {blog.topicTable.map((table, index) => (
                          <Box key={`${index}`} pt={5.5}>
                            {index ===
                              Math.floor(blog.topicTable.length / 2) && (
                              <Box
                                mb={5}
                                sx={{
                                  "& > img": {
                                    objectFit: "cover",
                                    height: {
                                      xs: "350px",
                                      sm: "400px",
                                      md: "500px",
                                    },
                                  },
                                }}
                              >
                                <img
                                  className="__img"
                                  src={blog.bannerImage}
                                  alt={"bannerimage"}
                                />
                              </Box>
                            )}

                            <React.Fragment>
                              <Box my={2}>
                                {table.title && (
                                  <div id={`${LinkParser(table.title)}`}>
                                    <Box
                                      sx={{
                                        borderLeft: " 4px solid #1890ff",
                                        pl: 2,
                                      }}
                                    >
                                      <UseText3 text={table.title} />
                                    </Box>
                                  </div>
                                )}
                              </Box>

                              <Box>
                                {typeof table.data === "object" ? (
                                  <UseToRanderTopic data={table.data} />
                                ) : (
                                  <UseText4 text={table.data} />
                                )}
                              </Box>
                            </React.Fragment>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <Box py={4} mt={2}>
                      <Box className="flex ai-c jc-c">
                        <UseText4 text="Thanks for reading" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Col>
              <Col lg={6} md={6} xs={0} className="pos-rel">
                <Box sx={{ position: "sticky", top: "5rem" }}>
                  <Box>
                    <UseSideBarNavigator
                      underLine
                      title="Links"
                      routes={[
                        { name: "About us", route: "/about-us" },
                        { name: "Case stuides", route: "/case-studies" },
                        { name: "Our team", route: "/team" },
                      ]}
                    />
                  </Box>
                  <Box mt={3}>
                    <UseSideBarNavigator
                      underLine
                      title="What we do"
                      routes={[
                        {
                          name: "Game development",
                          route: "/services/game-development",
                        },
                        {
                          name: "Mobile apps",
                          route: "/services/mobile-development",
                        },
                        { name: "Blockchain", route: "/services/blockchain" },
                        {
                          name: "UI/UX design",
                          route: "/services/web-development",
                        },
                      ]}
                    />
                  </Box>
                </Box>
              </Col>
            </Row>
          </Box>
        </Row>
      </Container>
    </Box>
  );
};

const RelatedBlogs = () => {
  return (
    <>
      <Box my={2}>
        <Container>
          <UseText3 text={"Relatd blogs"} />
        </Container>
      </Box>
      <Random3Blogs />
    </>
  );
};

type ListProps = {
  data: string[];
};
const UseToRanderTopic = ({ data }: ListProps) => {
  return (
    <Box component="article" className="__topic__data__box flex fd-c" gap={2.2}>
      {data.map((e, i) => (
        <Box key={`${i}`}>
          <UseText4 text={e} />
        </Box>
      ))}
    </Box>
  );
};

type NavigatorProps = {
  title: string;
  routes: {
    name: string;
    route: string;
  }[];
  underLine?: boolean;
};

const UseSideBarNavigator = ({ title, routes, underLine }: NavigatorProps) => {
  return (
    <Box px={2}>
      <Box>
        <Box component="h1" fontSize="1.3rem" fontWeight={"600"} m={0}>
          {title}
        </Box>
      </Box>
      <Box component="ul" mb={0} p={0} mt={1.5}>
        {routes.map((e, i) => (
          <Box
            component={"li"}
            className="__blog__side__li"
            sx={{
              listStyle: "none",
              textDecoration: underLine ? "underline" : "none",
              textDecorationColor: "gray",
            }}
            key={i}
          >
            <Link to={e.route}>
              <UseText text={e.name} />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

type UseBoxProps = {
  text: React.ReactNode;
};

const UseText = ({ text }: UseBoxProps) => {
  return (
    <Box component="h3" fontSize="1rem" fontWeight={"500"} color="gray" m={0}>
      {text}
    </Box>
  );
};
const UseText2 = ({ text }: UseBoxProps) => {
  return (
    <Box component="h3" fontSize="0.8rem" fontWeight={"400"} m={0}>
      {text}
    </Box>
  );
};
const UseText3 = ({ text }: UseBoxProps) => {
  return (
    <Box component="h1" fontSize="1.9rem" fontWeight={"700"} m={0}>
      {text}
    </Box>
  );
};

const UseText4 = ({ text }: UseBoxProps) => {
  return (
    <Box component="h1" fontSize="1.11rem" fontWeight={"500"} m={0}>
      {text}
    </Box>
  );
};

export default ReadSingleBlog;
