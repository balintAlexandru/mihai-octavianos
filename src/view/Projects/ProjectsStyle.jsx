import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";
import * as ceva from "../../components/ProjectModel/ProjectsModelStyle";

export const ProjectsContainer = styled.div(
  ({ style }) => css`
    ${console.log(style)}
    margin-top: 9rem;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    ${ceva.ProjectModelImage} {
      filter: blur(0px);
    }
    &:hover {
      ${ceva.ProjectModelImage} {
        filter: blur(${style ? "5px" : "0px"});
        &:hover {
          filter: blur(0px);
        }
      }
    }
  `
);
export const ProjectWrapper = styled.div`
  display: flex;
  background-color: red;
  @media (min-width: ${variables.desktop}) {
    width: 80%;
    height: 100%;
  }
`;
export const ProjectWrapperLeft = styled.div`
  background-color: blue;
  display: flex;

  @media (min-width: ${variables.desktop}) {
  }
`;
export const ProjectWrapperRight = styled.div``;
