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
    padding: 14rem 2rem 2rem 2rem;
    flex-direction: column;
    z-index: ${style.value ? "1" : "-1"};
    opacity: ${style.value ? "1" : "0"};
    transition: z-index ${style.value ? "0s" : "0.4s"} ease-in-out,
      opacity ${style.value ? "0.4s" : "0.4s"} ease-in-out;
    @media (min-width: ${variables.desktop}) {
      justify-content: center;
      align-items: center;
    }
  `
);

// wrapper
export const MenuLayoutWrapper = styled.div`
  width: 100%;
  @media (min-width: ${variables.desktop}) {
    width: 50%;
    margin-bottom: 20rem;
  }
`;
export const MenuLayoutLine = styled.div(
  ({ style }) => css`
    background-color: ${variables.blackPrimaryColor};
    height: 0.2rem;
    width: ${style.value ? "100%" : "0%"};
    transition: width ${style.value ? "0.4s" : "0s"} ease-in-out;
  `
);

// text
export const MenuLayoutTextWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
`;
export const MenuLayoutTextLineWrapper = styled.div`
  width: 40rem;
  position: relative;
  display: flex;
  align-items: center;
`;
export const MenuLayoutTextLineDimension = styled.div`
  height: 120%;
  position: relative;
  margin-top: 1rem;
`;
export const MenuLayoutTextLine = styled.div(
  ({ style }) => css`
    position: absolute;
    height: ${style.value ? "0.2rem" : "0rem"};
    width: ${style.value ? "116%" : "0%"};
    background-color: ${variables.blackPrimaryColor};
    bottom: 40%;
    left: -2%;
    transition: width ${style.value ? "0.4s" : "0s"} ease-in-out;
    @media (min-width: ${variables.desktop}) {
      height: ${style.value ? "0.2rem" : "0rem"};
      width: ${style.value ? "116%" : "0%"};
    }
  `
);

export const MenuLayoutText = styled.span(
  ({ style }) => css`
    transform: scale(5);
    font-size: ${style.value ? "4rem" : "3rem"};
    transition: font-size 0.1s ease-in-out;
    color: ${variables.blackPrimaryColor};
    cursor: pointer;
    font-weight: ${style.value ? variables.regular : 500};
    font-family: ${variables.poppins};
    @media (min-width: ${variables.desktop}) {
      font-size: ${style.value ? "6rem" : "4rem"};
    }
  `
);

// social-media
export const MenuLayoutSocialMediaWrapper = styled.div`
  margin-top: 12rem;
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
