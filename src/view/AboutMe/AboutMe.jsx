import React, { useEffect } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";

const AboutMe = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);
  return <div>Muie si pe pagina x2 asta Mihai</div>;
};

export default AboutMe;
