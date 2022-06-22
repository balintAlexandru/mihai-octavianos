// LIBRARIES
import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";

// LIBRARIES
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// container
export const IntroPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// logo
export const IntroPageLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;
export const IntroPageLogoWrapper = styled.div`
  width: 6rem;
  height: 6rem;
`;
export const IntroPageLogo = styled.img`
  width: 100%;
  height: 100%;
`;

// intro video
export const IntroPageVideoControlContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const IntroPageVideoControlSoundWrapper = styled.div``;
export const IntroPageVideoControlSkipButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const IntroPageVideoControlSkipButtonText = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 1.6rem;
`;

// icons
export const VolumeUpIconStyle = styled(VolumeUpIcon)`
  font-size: 3rem !important;
  color: ${variables.whitePrimaryColor};
`;
export const VolumeOffIconStyle = styled(VolumeOffIcon)`
  font-size: 3rem !important;
  color: ${variables.whitePrimaryColor};
`;
export const ArrowRightAltIconStyle = styled(ArrowRightAltIcon)`
  font-size: 3rem !important;
  color: ${variables.whitePrimaryColor};
`;
