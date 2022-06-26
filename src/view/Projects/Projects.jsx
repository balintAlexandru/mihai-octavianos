import React, { useEffect } from "react";

// CONSTANTS
import { changeBackgroundColor } from "../../helpers/globalFunctions";
import {PROJECTS} from "../../constants/projects";

// STYLE
import * as variables from "../../utils/Styles/variables";

// COMPONENTS
import ProjectModel from "../../components/ProjectModel/ProjectModel"
const Projects = () => {

  // HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
  }, []);

  return <div>
    <ProjectModel data = {PROJECTS}/>
  </div>;
};

export default Projects;
