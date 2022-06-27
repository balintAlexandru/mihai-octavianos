import React, { useEffect } from "react";

// CONSTANTS
import { changeBackgroundColor } from "../../helpers/globalFunctions";

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

  // HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
  }, []);

  return (
    <>
      {PROJECTS_DATA?.length > 0 && (
        <Styled.ProjectsContainer>
          {PROJECTS_DATA?.map((data, index) => (
            <ProjectModel key={index} image={data?.IMAGE} name={data?.NAME} />
          ))}
        </Styled.ProjectsContainer>
      )}
    </>
  );
};

export default Projects;
