// LIBRARIES
import styled, { css } from "styled-components";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  background-color: ${variables.blackPrimaryColor};
  @media (min-width: ${variables.desktop}) {
    padding: 10rem;
  }
`;
export const AboutMeLineWrapper = styled.div`
  width: 100%;
  padding-top: 10rem;
`;
export const AboutMeLine = styled.div`
  width: 80%;
  height: 0.1rem;
  background-color: ${variables.whitePrimaryColor};
  @media (min-width: ${variables.desktop}) {
    width: 90%;
  }
`;

export const AboutMeIntroTextWrapper = styled.div`
  @media (min-width: ${variables.desktop}) {
    width: 40%;
    padding-top: 4rem;
  }
`;
export const AboutMeIntroText = styled.span`
  font-size: 7rem;
  font-family: "Belleza", sans-serif;
  font-weight: 300;
  color: ${variables.whitePrimaryColor};
  opacity: 90%;
  line-height: 6.5rem;
  @media (min-width: ${variables.desktop}) {
    font-size: 16rem;
    line-height: 13rem;
    letter-spacing: 1rem;
  }
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
  background-color: #6e5e5e;
  @media (min-width: ${variables.desktop}) {
    height: 80vh;
  }
`;

// about
export const AboutMeAboutWrapper = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${variables.desktop}) {
    flex-direction: row-reverse;
    padding-top: 15rem;
  }
`;
export const AboutMeBioWrapper = styled.div`
  width: 100%;
  @media (min-width: ${variables.desktop}) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;
export const AboutMeBio = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  letter-spacing: 0.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  @media (min-width: ${variables.desktop}) {
    font-size: 2rem;
  }
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
  @media (min-width: ${variables.desktop}) {
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.8rem;
    letter-spacing: 0.04rem;
  }
`;

// name1
export const AboutMeName1Wrapper = styled.div``;
export const AboutMeName1TextWrapper = styled.div``;
export const AboutMeName1Text = styled.p``;
export const AboutMeName1ImageWrapper = styled.div``;
export const AboutMeName1Image = styled.img``;
