/*
*
*
*
*
authors:['Arnob Islam',....]
created date:'05-08-22'
description:'It contains all routes & folder structure'
github:'https://github.com/mihir-kanzariya/CompanyPortfolio'
*
*
*
*/

import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import AppHeader from "./components/navbar/Navbar";
import Landing from "./screens/Landing";
import AboutUs from "./screens/AboutUs";
import CaseStudies from "./screens/CaseStudies";
import Blogs from "./screens/Blogs";
import SingleCaseStudies from "./screens/SingleCaseStudies";
import ReadSingleBlog from "./screens/ReadSingleBlog";
import PageMoreBlogs from "./screens/MoreBlogs";
import GetTouch from "./screens/GetTouch";
import Service from "./screens/Service";
import Technology from "./screens/Technology";
import Industry from "./screens/Industry";
import Feedback from "./screens/Feedback";
import Team from "./screens/Team";
import Error from "./screens/Error";
import Scroll from "./components/hooks/FixedScroll";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDesign />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:name" element={<SingleCaseStudies />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:read/" element={<ReadSingleBlog />} />
          <Route path="/blogs/page/:no" element={<PageMoreBlogs />} />
          <Route path="/services/:name" element={<Service />} />
          <Route path="/technology/:name" element={<Technology />} />
          <Route path="/work/:name" element={<Industry />} />
          <Route path="/get-touch" element={<GetTouch />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/team-members" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

function LayoutDesign() {
  return (
    <Scroll>
      <AppHeader />
      <Outlet />
    </Scroll>
  );
}

export default App;
