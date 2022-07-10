import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const ProjectPageContainer = styled.div`
  width: 100vw;
  height: 100%;
`;
export const ProjectPageHeroWrapper = styled.div(
  ({ style }) => css`
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 0;
    z-index: -1;
    @media (min-width: ${variables.desktop}) {
      height: 100vh;
    }
  `
);
export const ProjectPageHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 40%;
  @media (min-width: ${variables.desktop}) {
    object-fit: cover;
    height: 100%;
  }
`;

export const ProjectPageHeroInfoContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${variables.desktop}) {
    height: 100vh;
    padding-bottom: 4rem;
  }
`;

export const ProjectPageHeroInfoWrapper = styled.div``;

export const ProjectPageHeroInfoNameWrapper = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;
export const ProjectPageHeroInfoName = styled.span`
  font-size: 5rem;
  color: ${variables.whitePrimaryColor};
  font-family: "Belleza", sans-serif;
  font-weight: 400;
  letter-spacing: 0.4rem;
  @media (min-width: ${variables.desktop}) {
    font-size: 25rem;
    font-weight: 500;
  }
`;

export const ProjectPageHeroInfoTextWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const ProjectPageHeroInfoText = styled.span`
  font-size: 1.6rem;
  color: ${variables.whitePrimaryColor};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  @media (min-width: ${variables.desktop}) {
    font-size: 2rem;
  }
`;

export const ProjectPageHeroScrollTextWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  position: relative;
`;
export const ProjectPageHeroScrollText = styled.span`
  font-size: 1.2rem;
  color: ${variables.whitePrimaryColor};
  font-family: "Poppins", sans-serif;
  position: absolute;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  bottom: 0;
  @media (min-width: ${variables.desktop}) {
    font-size: 1.6rem;
    font-weight: 400;
    top: 90%;
    transform: translate(-50%, 0%);
    height: 0;
  }
`;

export const ProjectPageHeroName = styled.span`
  font-size: 2rem;
  color: ${variables.whitePrimaryColor};
  font-family: "Belleza", sans-serif;
`;
export const ProjectPageHeroInfo = styled.span`
  font-size: 1.6rem;
  color: ${variables.whitePrimaryColor};
  font-family: "Belleza", sans-serif;
`;

// button
export const ProjectPageButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const ProjectPageButtonContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
`;
export const ProjectPageButtonIconWrapper = styled.div`
  padding: 0rem 0.6rem 0rem 2rem;
  @media (min-width: ${variables.desktop}) {
    padding: 0rem 1rem 0rem 4rem;
  }
`;
export const ProjectPageButtonIcon = styled(KeyboardBackspaceIcon)`
  &.MuiSvgIcon-root {
    font-size: 2.5rem;
    color: ${variables.whitePrimaryColor};
    @media (min-width: ${variables.desktop}) {
      font-size: 4rem;
    }
  }
`;
export const ProjectPageButtonTextWrapper = styled.div``;
export const ProjectPageButtonText = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  @media (min-width: ${variables.desktop}) {
    font-size: 2rem;
  }
`;

//top line
export const ProjectPageLineTopWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
`;
export const ProjectPageTopLine = styled.div`
  height: 0.1rem;
  width: 80%;
  background-color: ${variables.whitePrimaryColor};
`;

// images
export const ProjectPageImagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  @media (min-width: ${variables.desktop}) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;
export const ProjectPageImagesLeft = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${variables.desktop}) {
    width: 35%;
  }
`;
export const ProjectPageImageRight = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${variables.desktop}) {
    width: 35%;
  }
`;

// line
export const ProjectPageLineWrapper = styled.div`
  width: 80%;
  margin: 5rem 0rem;
`;
export const ProjectPageLine = styled.div`
  height: 0.1rem;
  background-color: ${variables.whitePrimaryColor};
`;

// next page

export const ProjectPageNextPageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 30vh;
  @media (min-width: ${variables.desktop}) {
    width: 100vw;
    height: 100vh;
  }
`;
export const ProjectPageNextPageImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${variables.desktop}) {
    width: 100vw;
    height: 100vh;
    padding: 4rem;
  }
`;
export const ProjectPageNextPageImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const ProjectPageNextPageTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ProjectPageNextPageText = styled.span`
  font-size: 3rem;
  color: ${variables.whitePrimaryColor};
  font-family: "Belleza", sans-serif;
  @media (min-width: ${variables.desktop}) {
    font-size: 15rem;
    font-weight: ${variables.bold};
  }
`;
