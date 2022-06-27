import styled, { css } from "styled-components";

import * as variables from "../../utils/Styles/variables";

export const ProjectModelWrapper = styled.div(
  ({ style }) => css`
    padding: 1rem;
    visibility: hidden;
    animation: ${variables.fadeInProject} ${style.firstAnimation ? "0.6s" : "0.7s"} ease-in forwards;
    animation-delay: ${style.firstAnimation ? "0.3s" : "0.2s"};
  `
);
export const ProjectModelImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ProjectModelImage = styled.img`
  width: 100%;
  height: 100%;
`;
