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
      <Styled.AboutMeName1Wrapper>
        <Styled.AboutMeName1TextWrapper>
          <Styled.AboutMeName1Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            itaque, nulla ipsam dicta officiis rem earum! Exercitationem
            nostrum, doloremque iure debitis dignissimos, velit fugiat optio
            fugit vitae enim beatae eveniet.
          </Styled.AboutMeName1Text>
        </Styled.AboutMeName1TextWrapper>
        <Styled.AboutMeName1ImageWrapper>
          <Styled.AboutMeName1Image src="" alt="name1"/>
        </Styled.AboutMeName1ImageWrapper>
      </Styled.AboutMeName1Wrapper>
    </Styled.AboutMeContainer>
  );
};

export default AboutMe;
