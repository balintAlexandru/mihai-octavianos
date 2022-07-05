import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";

export const ProjectPageContainer = styled.div``;
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
  position: absolute;
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
  color: white;
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
  color: white;
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
  /* background-color: blue; */
`;
export const ProjectPageHeroScrollText = styled.span`
  font-size: 1.2rem;
  color: white;
  font-family: "Poppins", sans-serif;
  position: absolute;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  bottom: 0;
  @media (min-width: ${variables.desktop}) {
    font-size: 1.3rem;
    font-weight: 400;
    top: 90%;
    transform: translate(-50%, 0%);
    height: 0;
  }
`;

export const ProjectPageHeroName = styled.span`
  font-size: 2rem;
  color: white;
  font-family: "Belleza", sans-serif;
`;
export const ProjectPageHeroInfo = styled.span`
  font-size: 1.6rem;
  color: white;
  font-family: "Belleza", sans-serif;
`;
