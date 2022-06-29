import React, { useEffect, useState } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";
import * as Styled from "./ProjectsStyle";

// COMPONENTS
import ProjectModel from "../../components/ProjectModel/ProjectModel";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";

// REDUX
import { useSelector } from "react-redux";

const Projects = () => {
  // CONSTANTS
  const PROJECTS_DATA = useSelector((state) => state.projectsData.value);

  // CONSTANTS USING HOOKS
  const [projectLayoutStyle, setProjectLayoutStyle] = useState(false);

  // HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);
  return (
    <>
      {/* <ProjectLayout hideLayout={setProjectLayoutStyle} /> */}
      {PROJECTS_DATA?.length > 0 && (
        <Styled.ProjectsContainer onClick={() => setProjectLayoutStyle(true)}>
          {PROJECTS_DATA?.map((data, index) => (
            <ProjectModel
              key={index}
              image={data?.IMAGE}
              name={data?.NAME}
              customStyle={projectLayoutStyle}
            />
          ))}
        </Styled.ProjectsContainer>
      )}
    </>
  );
};

export default Projects;
