import React, { useRef, useState, useEffect } from "react";
import { BlogData, IBlog } from "./helper";
import { Box, Container } from "@mui/material";
import { Button, Segmented, Select } from "antd";
import { SegmentedLabeledOption } from "antd/lib/segmented";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import UsePaginator from "./UsePaginator";
import BlogSegment from "./BlogSegment";

const { Option } = Select;

const DisplayBlogs = () => {
  const [blogPosts, setBlogPosts] = useState<IBlog[]>([]);

  const [currentPage, setcurrentPage] = useState<number>(1);

  useEffect(() => {
    setBlogPosts(BlogData.slice(0, 9));
  }, []);

  const handleFilter = (catagory: string) => {
    const filtered = BlogData.filter((e) => e.catagory === catagory);
    if (catagory === "All") {
      setBlogPosts(BlogData.slice(0, 9));
      return;
    }
    setBlogPosts(filtered);
  };

  const pageChange = (page: number) => {
    setcurrentPage(page);
  };

  return (
    <>
      <CatagoryFilter handleFilter={handleFilter} />

      <BlogSegment posts={blogPosts} />

      {blogPosts.length === 9 && (
        <UsePaginator
          current={currentPage}
          onChange={pageChange}
          total={BlogData.length}
        />
      )}
    </>
  );
};

type FilterProps = {
  handleFilter: Function;
};

type Catagory = {
  catagory: string;
  count: number;
};

type ScroolProps = {
  type: "next" | "prev";
};

const CatagoryFilter = ({ handleFilter }: FilterProps) => {
  const segMentRef = useRef<any>(null);

  const HandleScrool = ({ type }: ScroolProps) => {
    var scrollAmount = 0;
    var scrollMin = 0;

    if (type === "next") {
      if (segMentRef.current) {
        segMentRef.current.scrollTo({
          behavior: "smooth",
          left: Math.max((scrollAmount += 500), segMentRef.current.clientWidth),
        });
      }
    }
    if (type === "prev") {
      if (segMentRef.current) {
        segMentRef.current.scrollTo({
          behavior: "smooth",
          left: Math.min((scrollAmount -= 500), scrollMin),
        });
      }
    }
  };

  const container: Catagory[] = [];
  for (let index = 0; index < BlogData.length; index++) {
    const e = BlogData[index];

    const find = container.find((catagory) => catagory.catagory === e.catagory);
    if (!find) {
      container.push({
        catagory: e.catagory,
        count: BlogData.filter((blog) => blog.catagory === e.catagory).length,
      });
    }
  }

  const AllCagagorys: Catagory[] = [
    { catagory: "All", count: BlogData.length },
    ...container,
  ];

  const option: SegmentedLabeledOption[] = AllCagagorys.map((e, i) => {
    return {
      label: (
        <Box className="flex ai-c" textTransform={"capitalize"} gap={1}>
          <Box component="h5" m={0} fontSize="1.2rem" fontWeight={"500"}>
            {e.catagory}
          </Box>
          <Box
            component="h6"
            m={0}
            className="blog__count"
            fontSize="0.9rem"
            fontWeight={"500"}
          >
            {e.count}
          </Box>
        </Box>
      ),
      value: e.catagory,
    };
  });

  return (
    <Box className="__vartical __cagatory__sec" pb={3}>
      <Container sx={{ display: { xs: "none", sm: "flex" } }}>
        <Box overflow={"hidden"} ref={segMentRef}>
          <Segmented
            size="large"
            options={option}
            onChange={(value) => handleFilter(value)}
          />
        </Box>
        <Box className="flex jc-fe ai-c" gap={1}>
          <Box className="flex " gap={1}>
            <Button
              onClick={() => HandleScrool({ type: "prev" })}
              type="text"
              icon={<LeftOutlined />}
              shape="circle"
            />

            <Button
              onClick={() => HandleScrool({ type: "next" })}
              type="text"
              icon={<RightOutlined />}
              shape="circle"
            />
          </Box>
        </Box>
      </Container>
      <Container sx={{ display: { xs: "flex", sm: "none" } }}>
        <Box className="w-100">
          <Select
            onChange={(value) => handleFilter(value)}
            style={{ width: "100%" }}
            size="large"
            defaultActiveFirstOption
          >
            {AllCagagorys.map((e, i) => (
              <Option value={e.catagory} key={i}>
                {e.catagory}{" "}
              </Option>
            ))}
          </Select>
        </Box>
      </Container>
    </Box>
  );
};

export default DisplayBlogs;
