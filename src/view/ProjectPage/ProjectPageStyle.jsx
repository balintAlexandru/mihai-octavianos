import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";

export const ProjectPageHeroContainer = styled.div(
  ({ style }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
);
export const ProjectPageHeroName = styled.span`
  font-size: 2rem;
  color: white;
`;
export const ProjectPageHeroInfo = styled.span`
  font-size: 1.6rem;
  color: white;
`;
