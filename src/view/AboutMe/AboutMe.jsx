import React, { useEffect } from "react";

// CONSTANTS
import { changeBackgroundColor } from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";

const AboutMe = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
  }, []);
  return <div>Muie si pe pagina x2 asta Mihai</div>;
};

export default AboutMe;
