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

// REDUX
import { useSelector } from "react-redux";

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
        {PROJECTS?.map((data, index) =>
          index <= 3 ? (
            <Styled.ProjectWrapperLeft>
              <ProjectModel
                key={index}
                id={index}
                image={data?.intro_image}
                layout={setProjectLayoutStyle}
              />
            </Styled.ProjectWrapperLeft>
          ) : (
            <Styled.ProjectWrapperRight>
              <ProjectModel
                key={index}
                id={index}
                image={data?.intro_image}
                layout={setProjectLayoutStyle}
              />
            </Styled.ProjectWrapperRight>
          )
        )}
      </Styled.ProjectWrapper>
    </Styled.ProjectsContainer>
  );
};

export default Projects;
