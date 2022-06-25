import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./view/IntroPage/IntroPage";
import Projects from "./view/Projects/Projects";
import AboutMe from "./view/AboutMe/AboutMe";
import Archive from "./view/Archive/Archive";
import Contact from "./view/Contact/Contact";
import Layout from "./view/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IntroPage/>} />
        <Route path="projects" element={ 
          <Layout>
            <Projects/>
          </Layout>} />
      <Route path="about-me" element={
          <Layout>
            <AboutMe/>
          </Layout>} />
      <Route path="archive" element={
          <Layout>
           <Archive/>
          </Layout>
      }/>
      <Route path="contact" element={
          <Layout>
           <Contact/>
          </Layout>
      }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
