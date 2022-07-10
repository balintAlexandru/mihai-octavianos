import React, { useEffect, useState } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";
import PROJECTS from "../../constants/projects";

// STYLE
import * as variables from "../../utils/Styles/variables";
import * as Styled from "./ProjectsStyle";

// COMPONENTS
import ProjectModel from "../../components/ProjectModel/ProjectModel";

const Projects = () => {
  // CONSTANTS

  // CONSTANTS USING HOOKS
  const [projectLayoutStyle, setProjectLayoutStyle] = useState(0);
  // HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);

  return (
    <Styled.ProjectsContainer style={{ projectLayoutStyle }}>
      <Styled.ProjectWrapper>
        <Styled.ProjectWrapperLeft>
          {PROJECTS?.map(
            (data, index) =>
              index <= 3 &&
              index >= 0 && (
                <ProjectModel
                  key={index}
                  id={index}
                  image={data?.intro_image}
                  styleType="projects"
                />
              )
          )}
        </Styled.ProjectWrapperLeft>
        <Styled.ProjectWrapperRight>
          {PROJECTS?.map(
            (data, index) =>
              index >= 4 &&
              index <= 8 && (
                <ProjectModel
                  key={index}
                  id={index}
                  image={data?.intro_image}
                  styleType="projects"
                />
              )
          )}
        </Styled.ProjectWrapperRight>
      </Styled.ProjectWrapper>
    </Styled.ProjectsContainer>
  );
};

export default Projects;
