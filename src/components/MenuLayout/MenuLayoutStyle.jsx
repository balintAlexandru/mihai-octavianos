// LIBRARIES
import styled, { css, keyframes } from "styled-components";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

// container
export const MenuLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${variables.whitePrimaryColor};
  position: absolute;
  top: 0;
  z-index: 2;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${variables.fadeIn} 0.5s ease-in;
`;

// wrapper
export const MenuLayoutWrapper = styled.div`
  width: 100%;
`;
export const MenuLayoutLine = styled.div`
  background-color: ${variables.blackPrimaryColor};
  height: 0.2rem;
  width: 100%;
  animation: ${variables.drawLine} 0.5s linear;
`;

// text
export const MenuLayoutTextWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const MenuLayoutTextLineWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const MenuLayoutTextLine = styled.div(
  ({ style }) => css`
    position: absolute;
    height: ${style.value ? "0.1rem" : "0rem"};
    margin-top: 0.5rem;
    left: ${style.left};
    width: ${style.lineWidth};
    background-color: ${variables.blackPrimaryColor};
    animation: ${drawTextLine(style.lineWidth)} 0.5s linear;
  `
);
export const MenuLayoutText = styled.span(
  ({ style }) => css`
    font-size: ${style.value ? "4rem" : "3rem"};
    color: ${variables.blackPrimaryColor};
    cursor: pointer;
    font-weight: ${style.value ? variables.semiBold : 500};
    font-family: ${variables.poppins};
  `
);

// social-media
export const MenuLayoutSocialMediaWrapper = styled.div`
  margin-top: 15rem;
`;
export const MenuLayoutSocialMedia = styled.a`
  font-style: italic;
  font-family: ${variables.poppins};
  font-size: 1.5rem;
  color: ${variables.blackPrimaryColor};
  text-decoration: none;
`;

// animation
const drawTextLine = (element) => {
  return keyframes`
      from { width: 0% }
      to { width: ${element} }
    `;
};
