import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";
import * as ceva from "../../components/ProjectModel/ProjectsModelStyle";

export const ProjectsContainer = styled.div(
  ({ style }) => css`
    ${console.log(style)}
    margin-top: 9rem;
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
