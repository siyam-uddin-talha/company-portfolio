import SearchBlogBanner from "./SearchBlogBanner";
import DisplayBlogs from "./DisplayBlogs";
import { useLayoutEffect } from "react";

const Index = () => {
  useLayoutEffect(() => {
    document.title = "Our blogs | Tekorio";
  }, []);
  return (
    <>
      <SearchBlogBanner />
      <DisplayBlogs />
    </>
  );
};

export default Index;
