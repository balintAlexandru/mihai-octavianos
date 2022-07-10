// LIBRARIES
import styled, { css } from "styled-components";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: ${variables.blackPrimaryColor};
`;
export const AboutMeLineWrapper = styled.div`
  width: 100%;
  padding-top: 10rem;
`;
export const AboutMeLine = styled.div`
  width: 80%;
  height: 0.1rem;
  background-color: ${variables.whitePrimaryColor};
`;

export const AboutMeIntroTextWrapper = styled.div`
  padding-top: 3rem;
`;
export const AboutMeIntroText = styled.span`
  font-size: 7rem;
  font-family: "Belleza", sans-serif;
  font-weight: 300;
  color: ${variables.whitePrimaryColor};
  opacity: 80%;
  line-height: 6.5rem;
`;
