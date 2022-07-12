// LIBRARIES
import styled, { css } from "styled-components";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  background-color: ${variables.blackPrimaryColor};
`;
export const AboutMeLineWrapper = styled.div`
  width: 100%;
  padding-top: 10rem;
`;
export const AboutMeLine = styled.div`
  width: 80%;
  height: 0.1rem;
  background-color: ${variables.whitePrimaryColor};
`;

export const AboutMeIntroTextWrapper = styled.div`
  padding-top: 3rem;
`;
export const AboutMeIntroText = styled.span`
  font-size: 7rem;
  font-family: "Belleza", sans-serif;
  font-weight: 300;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  line-height: 6.5rem;
`;

// video
export const AboutMeVideoWrapper = styled.div`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutMeVideo = styled.div`
  width: 100%;
  height: 19rem;
  background-color: white;
`;

// about
export const AboutMeAboutWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
`;
export const AboutMeBioWrapper = styled.div`
  width: 100%;
`;
export const AboutMeBio = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  letter-spacing: 0.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;
export const AboutMeTextWrapper = styled.div`
  width: 100%;
  padding-top: 2.5rem;
`;
export const AboutMeText = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  color: ${variables.whitePrimaryColor};
  line-height: 2.8rem;
  font-weight: 600;
  opacity: 90%;
  letter-spacing: 0.05rem;
`;
