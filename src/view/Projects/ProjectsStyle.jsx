import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";
import * as ceva from "../../components/ProjectModel/ProjectsModelStyle";
import { CoPresentOutlined } from "@mui/icons-material";

export const ProjectsContainer = styled.div(
  ({ style }) => css`
    margin-top: 9rem;
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
