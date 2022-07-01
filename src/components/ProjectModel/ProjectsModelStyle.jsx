import styled, { css } from "styled-components";

import * as variables from "../../utils/Styles/variables";

export const ProjectModelWrapper = styled.div`
  padding: 1rem;
  visibility: hidden;
  animation: ${variables.fadeInProject} 0.55s ease-in forwards;
  animation-delay: 0.3s;
  position: relative;
  transition: all 0.2s ease-in-out;
`;
export const ProjectModelImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ProjectModelImage = styled.img(
  ({ style }) => css`
    ${console.log(style)}
    width: 100%;
    height: 100%;
   
  `

  /* filter: blur(5px); */
);
