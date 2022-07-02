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

// REDUX
import { useSelector } from "react-redux";

const Projects = () => {
  // CONSTANTS
  const PROJECTS_DATA = useSelector((state) => state.projectsData.value);

  // CONSTANTS USING HOOKS
  const [projectLayoutStyle, setProjectLayoutStyle] = useState(0);
  // HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);
  console.log(projectLayoutStyle);
  return (
    <>
      {PROJECTS_DATA?.length > 0 && (
        <Styled.ProjectsContainer style={{ projectLayoutStyle }}>
          {PROJECTS_DATA?.map((data, index) => (
            <ProjectModel
              key={index}
              id={index}
              image={data?.IMAGE}
              layout={setProjectLayoutStyle}
            />
          ))}
        </Styled.ProjectsContainer>
      )}
    </>
  );
};

export default Projects;
