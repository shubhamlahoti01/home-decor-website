import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
