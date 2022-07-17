// LIBRARIES
import styled, { css } from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
  padding-top: 3rem;
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
export const AboutMeAboutLineWrapper = styled.div`
  width: 100%;
  padding-top: 11rem;
  @media (min-width: ${variables.desktop}) {
    padding-top: 28rem;
  }
`;
export const AboutMeAboutLine = styled.span`
  width: 80%;
  border-top: 0.1rem solid ${variables.whitePrimaryColor};
  padding-top: 0.6rem;
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  letter-spacing: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  float: right;
  @media (min-width: ${variables.desktop}) {
    font-size: 2.4rem;
    padding-top: 0.8rem;
  }
`;
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
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  color: ${variables.whitePrimaryColor};
  line-height: 2.8rem;
  font-weight: 500;
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
export const AboutMeName1Wrapper = styled.div`
  padding-top: 4.5rem;
  @media (min-width: ${variables.desktop}) {
    display: flex;
    width: 100%;
    padding-top: 10rem;
  }
`;
export const AboutMeName1TextWrapper = styled.div`
  padding-top: 2rem;
  @media (min-width: ${variables.desktop}) {
    width: 80%;
  }
`;
export const AboutMeName1Text = styled.p`
  font-size: 2.4rem;
  line-height: 2.5rem;
  font-family: "Belleza", sans-serif;
  color: ${variables.whitePrimaryColor};
  @media (min-width: ${variables.desktop}) {
    font-size: 6rem;
    line-height: 5rem;
  }
`;
export const AboutMeName1ImageWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 0.7rem;
  @media (min-width: ${variables.desktop}) {
    padding-left: 3rem;
  }
`;
export const AboutMeName1Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const AboutMeName1Info = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1rem;
  @media (min-width: ${variables.desktop}) {
    align-self: flex-end;
    position: absolute;
  }
`;

// name2
export const AboutMeName2Wrapper = styled.div`
  padding-top: 4.5rem;
  @media (min-width: ${variables.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    padding-top: 20rem;
  }
`;
export const AboutMeName2TextWrapper = styled.div`
  padding-top: 2rem;
  @media (min-width: ${variables.desktop}) {
    width: 80%;
  }
`;
export const AboutMeName2Text = styled.p`
  font-size: 2.4rem;
  line-height: 2.5rem;
  font-family: "Belleza", sans-serif;
  color: ${variables.whitePrimaryColor};
  @media (min-width: ${variables.desktop}) {
    font-size: 6rem;
    line-height: 5rem;
  }
`;
export const AboutMeName2ImageWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 0.7rem;
  @media (min-width: ${variables.desktop}) {
    padding-right: 3rem;
  }
`;
export const AboutMeName2Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const AboutMeName2Info = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1rem;
  @media (min-width: ${variables.desktop}) {
    align-self: flex-end;
    left: 56%;
    position: absolute;
  }
`;

// Archive button
export const AboutMeArchiveButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
`;
export const AboutMeArchiveButton = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  font-style: italic;
`;
export const AboutMeArchiveButtonIcon = styled(ArrowRightAltIcon)`
  &.MuiSvgIcon-root {
    font-size: 3rem;
    margin-left: 1rem;
    color: ${variables.whitePrimaryColor};
  }
`;

//behind the scene
export const AboutMeBehindSceneLineWrapper = styled.div`
  width: 85%;
  margin-top: 5rem;
  border-top: 0.1rem solid ${variables.whitePrimaryColor};
  padding-top: 0.5rem;
  margin-bottom: 8rem;
`;
export const AboutMeBefindSceneLine = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  letter-spacing: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  @media (min-width: ${variables.desktop}) {
    font-size: 2.4rem;
    padding-top: 0.8rem;
  }
`;

// about me instgram
export const AboutMeFooterLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${variables.whitePrimaryColor};
  opacity: 70%;
`;
export const AboutMeFooterTextWrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
`;
export const AboutMeFooterText = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  letter-spacing: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  @media (min-width: ${variables.desktop}) {
    font-size: 2.4rem;
  }
`;
export const AboutMeInstagramWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AboutMeInstagram = styled.a`
  font-size: 4.4rem;
  font-weight: 800;
  font-family: "Belleza", sans-serif;
  cursor: pointer;
  text-decoration: none;
  color: ${variables.whitePrimaryColor};
  padding: 1rem 0 3rem 0;
  &:hover {
    color: ${variables.whitePrimaryColor};
  }
  @media (min-width: ${variables.desktop}) {
    font-size: 14rem;
  }
`;

// text footer
export const AboutMeLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;
export const AboutMeProjectTextWrapper = styled.div`
  padding-right: 0.5rem;
  cursor: pointer;
`;
export const AboutMeProjectText = styled.span`
  font-size: 1.4rem;
  color: ${variables.whitePrimaryColor};
  @media (min-width: ${variables.desktop}) {
    font-size: 2rem;
  }
`;
export const AboutMeContactTextWrapper = styled.div`
  padding-left: 0.5rem;
  cursor: pointer;
`;
export const AboutMeContactText = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 1.4rem;
  @media (min-width: ${variables.desktop}) {
    font-size: 2rem;
  }
`;
