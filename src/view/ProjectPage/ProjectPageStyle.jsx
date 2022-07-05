import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";

export const ProjectPageContainer = styled.div``;
export const ProjectPageHeroWrapper = styled.div(
  ({ style }) => css`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
  `
);
export const ProjectPageHeroImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  @media (min-width: ${variables.desktop}) {
    object-fit: cover;
    height: 100%;
  }
`;

export const ProjectPageHeroInfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

export const ProjectPageHeroInfoNameWrapper = styled.div``;
export const ProjectPageHeroInfoName = styled.span`
  font-size: 2rem;
  color: white;
  font-family: "Belleza", sans-serif;
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
