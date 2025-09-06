import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AllBlog from "./pages/AllBlog";
import FeaturedBlog from "./pages/FeaturedBlog";
import ThoughtsBlog from "./pages/ThoughtsBlog";
import NewsBlog from "./pages/NewsBlog";
import TipsBlog from "./pages/TipsBlog";
import BlogPost from "./pages/BlogPost";
import ProjectPost from "./pages/ProjectPost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Work:id" element={<ProjectPost />} />
        <Route path="/Blog" element={<Blog />}>
          <Route index element={<AllBlog />} />
          <Route path="/Blog/Featured" element={<FeaturedBlog />} />
          <Route path="/Blog/Thoughts" element={<ThoughtsBlog />} />
          <Route path="/Blog/News" element={<NewsBlog />} />
          <Route path="/Blog/Tips" element={<TipsBlog />} />
        </Route>
        <Route path="/Blog:id" element={<BlogPost />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
