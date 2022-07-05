import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";
import * as ceva from "../../components/ProjectModel/ProjectsModelStyle";

export const ProjectsContainer = styled.div(
  ({ style }) => css`
    ${console.log(style)}
    margin-top: 19rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media (min-width: ${variables.desktop}) {
    width: 60%;
    height: 100%;
    display: flex;
  }
`;
export const ProjectWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${variables.desktop}) {
    width: 50%;
    height: 100%;
  }
`;
export const ProjectWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${variables.desktop}) {
    width: 50%;
    height: 100%;
  }
`;
