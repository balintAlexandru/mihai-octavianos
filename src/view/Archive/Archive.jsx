import React, { useEffect } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";

const Archive = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);
  return <div>Muie si pe pagina asta Mihai x4</div>;
};

export default Archive;
