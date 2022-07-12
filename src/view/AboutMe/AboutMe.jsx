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
        <Styled.AboutMeIntroText>ABOUT MIHAI</Styled.AboutMeIntroText>
      </Styled.AboutMeIntroTextWrapper>
      <Styled.AboutMeVideoWrapper>
        <Styled.AboutMeVideo />
      </Styled.AboutMeVideoWrapper>
      <Styled.AboutMeAboutWrapper>
        <Styled.AboutMeBioWrapper>
          <Styled.AboutMeBio>B I O</Styled.AboutMeBio>
        </Styled.AboutMeBioWrapper>
        <Styled.AboutMeTextWrapper>
          <Styled.AboutMeText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum quasi architecto dolores beatae minus quisquam delectus
            earum quam commodi neque, officia necessitatibus quibusdam molestiae
            tempora, molestias illum praesentium unde.
          </Styled.AboutMeText>
        </Styled.AboutMeTextWrapper>
      </Styled.AboutMeAboutWrapper>
    </Styled.AboutMeContainer>
  );
};

export default AboutMe;
