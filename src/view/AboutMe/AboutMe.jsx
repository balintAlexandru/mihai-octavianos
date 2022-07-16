import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

// STYLE
import * as variables from "../../utils/Styles/variables";
import * as Styled from "./AboutMeStyle";
import Name1 from "../../images/AboutMe/Name1/Name1.jpg";
import { Style } from "@mui/icons-material";

const AboutMe = () => {
  //HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);

  //CONSTANTS USING LIBRARIES
  const navigate = useNavigate();

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
      <Styled.AboutMeAboutLineWrapper>
        <Styled.AboutMeAboutLine>COLLABORATION</Styled.AboutMeAboutLine>
      </Styled.AboutMeAboutLineWrapper>

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
          <Styled.AboutMeName1Image src={Name1} alt="name1" />
        </Styled.AboutMeName1ImageWrapper>
        <Styled.AboutMeName1Info>
          Description project made in 2020
        </Styled.AboutMeName1Info>
      </Styled.AboutMeName1Wrapper>

      <Styled.AboutMeName2Wrapper>
        <Styled.AboutMeName2TextWrapper>
          <Styled.AboutMeName2Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            itaque, nulla ipsam dicta officiis rem earum! Exercitationem
            nostrum, doloremque iure debitis dignissimos, velit fugiat optio
            fugit vitae enim beatae eveniet.
          </Styled.AboutMeName2Text>
        </Styled.AboutMeName2TextWrapper>
        <Styled.AboutMeName2ImageWrapper>
          <Styled.AboutMeName2Image src={Name1} alt="name1" />
        </Styled.AboutMeName2ImageWrapper>
        <Styled.AboutMeName2Info>
          Description project made in 2020
        </Styled.AboutMeName2Info>
      </Styled.AboutMeName2Wrapper>
      <Styled.AboutMeArchiveButtonWrapper>
        <Styled.AboutMeArchiveButton
          onClick={() => {
            navigate("/archive");
          }}
        >
          View Archive
        </Styled.AboutMeArchiveButton>
        <Styled.AboutMeArchiveButtonIcon />
      </Styled.AboutMeArchiveButtonWrapper>

      <Styled.AboutMeBehindSceneLineWrapper>
        <Styled.AboutMeBefindSceneLine>
          BEHIND THE SCENES
        </Styled.AboutMeBefindSceneLine>
      </Styled.AboutMeBehindSceneLineWrapper>
    </Styled.AboutMeContainer>
  );
};

export default AboutMe;
