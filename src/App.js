import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./view/IntroPage/IntroPage";
import Projects from "./view/Projects/Projects";
import AboutMe from "./view/AboutMe/AboutMe";
import Archive from "./view/Archive/Archive";
import Contact from "./view/Contact/Contact";
import Layout from "./view/Layout/Layout";
import ProjectPage from "./view/ProjectPage/ProjectPage";

// REDUX
import { useDispatch } from "react-redux";
import { GetProjectsData } from "./slices/projectsData";

// FIREBASE
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  // LIBRARIES CONSTANTS
  const dispatch = useDispatch();
  const projectsCollectionRef = collection(db, "projects");

  // HANDLE FUNCTIONS
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      dispatch(GetProjectsData(data.docs.map((doc) => ({ ...doc.data() }))));
    };
    getProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route
          path="projects"
          element={
            <>
              <Projects />
              <Layout />
            </>
          }
        />
        <Route
          path="project-:id"
          element={
            <>
              <ProjectPage />
              <Layout />
            </>
          }
        />
        <Route
          path="about-me"
          element={
            <>
              <AboutMe />
              <Layout />
            </>
          }
        />
        <Route
          path="archive"
          element={
            <>
              <Archive />
              <Layout />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Contact />
              <Layout />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
