import React, { useEffect } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";
import * as Styled from "./AboutMeStyle";

const AboutMe = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);

  return (
    <Styled.AboutMeContainer>
      <Styled.AboutMeLineWrapper>
        <Styled.AboutMeLine />
      </Styled.AboutMeLineWrapper>
      <Styled.AboutMeIntroTextWrapper>
        <Styled.AboutMeIntroText>
          ABOUT MIHAI
        </Styled.AboutMeIntroText>
      </Styled.AboutMeIntroTextWrapper>
    </Styled.AboutMeContainer>
  );
};

export default AboutMe;
