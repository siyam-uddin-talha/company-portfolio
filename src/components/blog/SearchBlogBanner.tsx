import React, { useDeferredValue, useEffect, useState } from "react";
import { BlogData, IBlog } from "./helper";
import { Box, Container } from "@mui/material";
import { Col, Input, Row, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LinkParser } from "../utils/Parser";

const { Option } = Select;

const UseToFindBlog = (query: string, data: IBlog[]) => {
  return data.filter((e: IBlog) => {
    const regex = new RegExp(query, "gi");
    var wordInLine: string = "";
    e.topic.map((e: string) => (wordInLine = wordInLine + " " + e));
    return (
      e.title.match(regex) || e.catagory.match(regex) || wordInLine.match(regex)
    );
  });
};

const SearchBlogBanner = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const deferredQuery = useDeferredValue(searchQuery);

  const [options, setOptions] = useState<IBlog[]>([]);

  useEffect(() => {
    if (deferredQuery) {
      const items = UseToFindBlog(deferredQuery, BlogData);
      setOptions(items);
    }
  }, [deferredQuery]);

  return (
    <Box component="section" py={10} mt={4}>
      <Container>
        <Row>
          <Col lg={12} md={16} xs={24}>
            <Box py={3}>
              <Box component="h2" fontWeight={"600"} fontSize="2.1rem" m={0}>
                Our Blogs
              </Box>
            </Box>
          </Col>
          <Col lg={16} md={18} xs={24}>
            <Box className="w-100">
              <Input.Group compact size="large">
                <Select
                  style={{ width: "88%" }}
                  placeholder="Try to find blog"
                  size="large"
                  showSearch
                  value={searchQuery}
                  showArrow={false}
                  onSearch={(v) => setSearchQuery(v)}
                  onChange={(v) => setSearchQuery(v)}
                >
                  {options.map((e, i) => (
                    <React.Fragment key={i}>
                      {e.topic.map((topic) => (
                        <Option key={topic} value={topic}>
                          <Link
                            to={`/blog/${LinkParser(e.title)}/#${LinkParser(
                              topic
                            )}`}
                          >
                            {topic}
                          </Link>
                        </Option>
                      ))}
                    </React.Fragment>
                  ))}
                </Select>
                <Button type="primary" size="large" icon={<SearchOutlined />} />
              </Input.Group>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default SearchBlogBanner;
