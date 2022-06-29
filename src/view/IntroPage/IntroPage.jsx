import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

//STYLE
import * as Styled from "./IntroPageStyle";

// ASSETS
import logo from "../../assets/IntroPage/logo.png";

const IntroPage = () => {
  // CONSTANTS USING LIBRARIES
  const navigate = useNavigate();

  // HOOKS
  const [volumeState, setVolumeState] = useState(true);

  // HANDLE FUNCTIONS

  return (
    <Styled.IntroPageContainer>
      <Styled.IntroPageLogoContainer>
        <Styled.IntroPageLogoWrapper>
          <Styled.IntroPageLogo src={logo}></Styled.IntroPageLogo>
        </Styled.IntroPageLogoWrapper>
      </Styled.IntroPageLogoContainer>
      <Styled.IntroPageVideoControlContainer>
        <Styled.IntroPageVideoControlSoundWrapper
          onClick={() => setVolumeState(!volumeState)}
        >
          {volumeState ? (
            <Styled.VolumeUpIconStyle />
          ) : (
            <Styled.VolumeOffIconStyle />
          )}
        </Styled.IntroPageVideoControlSoundWrapper>
        <Styled.IntroPageVideoControlSkipButtonWrapper
          onClick={() => navigate("/projects")}
        >
          <Styled.IntroPageVideoControlSkipButtonText>
            Skip intro
          </Styled.IntroPageVideoControlSkipButtonText>
          <Styled.ArrowRightAltIconStyle />
        </Styled.IntroPageVideoControlSkipButtonWrapper>
      </Styled.IntroPageVideoControlContainer>
    </Styled.IntroPageContainer>
  );
};

export default IntroPage;
