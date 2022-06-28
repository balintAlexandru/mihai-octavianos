// LIBRARIES
import styled, { css } from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

// container
export const MenuLayoutContainer = styled.div(
  ({ style }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${variables.whitePrimaryColor};
    position: absolute;
    top: 0;
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: ${style.value ? "2" : "-1"};
    opacity: ${style.value ? "1" : "0"};
    transition: z-index ${style.value ? "0s" : "0.4s"} ease-in-out,
      opacity ${style.value ? "0.4s" : "0.4s"} ease-in-out;
  `
);

// wrapper
export const MenuLayoutWrapper = styled.div`
  width: 100%;
`;
export const MenuLayoutLine = styled.div(
  ({ style }) => css`
    background-color: ${variables.blackPrimaryColor};
    height: 0.2rem;
    width: ${style.value ? "100%" : "0%"};
    transition: width 0.4s ease-in-out;
  `
);

// text
export const MenuLayoutTextWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-left: 1rem;
`;
export const MenuLayoutTextLineWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const MenuLayoutTextLineDimension = styled.div`
  height: 100%;
  position: relative;
  margin-top: 1rem;
`;
export const MenuLayoutTextLine = styled.div(
  ({ style }) => css`
    position: absolute;
    height: 1.9rem;
    width: ${style.value ? "110%" : "0.2rem"};
    background-color: ${variables.blackPrimaryColor};
    bottom: ${style.value ? "1%" : "20%"};
    left: -6%;
    z-index: -1;
    transition: width ${style.value ? "0.4s" : "0s"} ease-in;
  `
);

export const MenuLayoutText = styled.span(
  ({ style }) => css`
    font-size: ${style.value ? "4rem" : "3rem"};
    transition: font-size 0.1s ease-in-out;
    color: ${variables.blackPrimaryColor};
    cursor: pointer;
    font-weight: ${style.value ? variables.semiBold : 500};
    font-family: ${variables.poppins};
    /* transform: scale(1, 1.3); */
    background: linear-gradient(
      to bottom,
      ${variables.blackPrimaryColor} ${style.value ? "60%" : "100%"},
      #eff3f8 0%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
);

// social-media
export const MenuLayoutSocialMediaWrapper = styled.div`
  margin-top: 15rem;
  display: flex;
  align-items: center;
`;
export const MenuLayoutSocialMedia = styled.a`
  font-style: italic;
  font-family: ${variables.poppins};
  font-size: 1.5rem;
  color: ${variables.blackPrimaryColor};
  text-decoration: none;
  margin-left: 0.5rem;
`;
export const MenuInstagramIcon = styled(InstagramIcon)`
  font-size: 2rem !important;
  color: ${variables.blackPrimaryColor};
`;
