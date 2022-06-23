import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//STYLE
import * as Styled from "./IntroPageStyle";

// LIBRARIES
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// ASSETS
import logo from "../../assets/IntroPage/logo.png";

const IntroPage = () => {
  const navigate = useNavigate();
  
  // HOOKS
  const [volumeState, setVolumeState] = useState(true);

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
