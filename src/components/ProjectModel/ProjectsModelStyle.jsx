import styled, { css } from "styled-components";

import * as variables from "../../utils/Styles/variables";

export const ProjectModelWrapper = styled.div(
  ({ style }) => css`
    ${style.styleType === "projects" &&
    css`
      cursor: pointer;
      padding: 1rem;
      visibility: hidden;
      animation: ${variables.fadeInProject} 0.55s ease-in forwards;
      animation-delay: 0.3s;
      transition: all 0.2s ease-in-out;
      @media (min-width: ${variables.desktop}) {
        width: 100%;
        height: 100%;
      }
    `}
    ${style.styleType === "projectPage" &&
    css`
      padding: 4rem 3rem;
      @media (min-width: ${variables.desktop}) {
        
      }
    `}
  `
);
export const ProjectModelImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ProjectModelImage = styled.img(
  ({ style }) => css`
    width: 100%;
    height: 100%;
  `
);
