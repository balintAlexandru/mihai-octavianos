import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./view/IntroPage/IntroPage";
import Projects from "./view/Projects/Projects";
import AboutMe from "./view/AboutMe/AboutMe";
import Archive from "./view/Archive/Archive";
import Contact from "./view/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IntroPage/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="about-me" element={<AboutMe/>} />
      <Route path="archive" element={<Archive/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
