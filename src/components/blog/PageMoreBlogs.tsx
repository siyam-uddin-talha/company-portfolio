import React, { useState } from "react";
import { useParams } from "react-router";
import BlogSegment from "./BlogSegment";
import { IBlog, BlogData } from "./helper";
import SearchBlogBanner from "./SearchBlogBanner";
import UsePaginator from "./UsePaginator";

const PageMoreBlogs = () => {
  const { no } = useParams();

  const [blogPosts, setBlogPosts] = useState<IBlog[]>([]);

  const [currentPage, setcurrentPage] = useState<number>(0);

  React.useLayoutEffect(() => {
    document.title = `Our blogs ${no} | Tekorio`;
    const resultsPerPage = 9;
    const page = Number(no);
    let __page = page >= 1 ? page : 1;
    __page = __page - 1;
    if (!page) {
      setBlogPosts([]);

      return;
    }
    setcurrentPage(page);
    const slice = BlogData.slice(
      resultsPerPage * __page,
      resultsPerPage * __page + 9
    );

    setBlogPosts(slice);
  }, [no]);

  return (
    <>
      <SearchBlogBanner />
      <BlogSegment posts={blogPosts} />

      {blogPosts.length !== 0 && (
        <UsePaginator
          current={currentPage}
          onChange={(page) => setcurrentPage(page)}
          total={BlogData.length}
        />
      )}
    </>
  );
};

export default PageMoreBlogs;
