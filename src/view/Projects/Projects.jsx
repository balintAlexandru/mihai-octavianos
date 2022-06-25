import React, { useEffect } from "react";

// CONSTANTS
import { changeBackgroundColor } from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";

const Projects = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
  }, []);
  return <div></div>;
};

export default Projects;
