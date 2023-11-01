import React, { useState, useEffect } from "react";
import { BlogData, IBlog } from "./helper";
import BlogSegment from "./BlogSegment";
import { useLocation } from "react-router";
import { Box, Container } from "@mui/material";
import { UseSimpleTitle } from "../hooks/UseTitle";

type Props = {
  title?: string;
};

const Random3Blogs = ({ title }: Props) => {
  const [postBlogs, setpostBlogs] = useState<IBlog[]>([]);

  const history = useLocation();

  useEffect(() => {
    const container: IBlog[] = [];

    for (let index = 0; index < BlogData.length - 1; index++) {
      const element = BlogData[Math.floor(Math.random() * BlogData.length)];
      const find = container.find((e) => e.title === element.title);
      if (container.length === 3) {
        break;
      }
      if (!find) {
        container.push(element);
      }
    }

    setpostBlogs(container);
  }, [history.pathname]);

  return (
    <>
      {title && (
        <Box pt={"2.5em"} pb={"1em"}>
          <Container>
            <UseSimpleTitle title="Blogs" />
            <Box className="__branding" lineHeight={"1"}>
              {title}
            </Box>
          </Container>
        </Box>
      )}
      <BlogSegment posts={postBlogs} />
    </>
  );
};

export default Random3Blogs;
