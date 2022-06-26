// LIBRARIES
import styled, { css } from "styled-components";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

// container
export const ContactContainer = styled.div(
  ({ style }) => css`
    width: 100%;
    background-color: ${variables.blackPrimaryColor};
    position: relative;
    padding: 2rem;
    visibility: ${style.showContent && "hidden"};
  `
);

// top line
export const ContactLine = styled.div(
  ({ style }) => css`
    height: 0.2rem;
    width: 100%;
    opacity: 60%;
    background-color: ${variables.whitePrimaryColor};
    margin-top: ${style.marginTop};
    animation: ${variables.drawLine} 0.6s ease-in;
  `
);

//text
export const ContactTextWrapper = styled.div(
  ({ style }) => css`
    width: 90%;
    margin-top: ${style.marginTop};
  `
);
export const ContactText = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 3rem;
  text-align: left;
  font-family: ${variables.poppins};
  animation: ${variables.fadeIn} 0.6s ease-in;
  font-weight: 600;
`;

// contact form
export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  animation: ${variables.fadeIn} 0.6s ease-in;
`;
export const ContactFormInput = styled.input`
  height: 4rem;
  margin-top: 1.5rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.2rem solid ${variables.whitePrimaryColor};
  border-radius:0px;
  font-size: 1.6rem;
  padding-left: 0.2rem;
  color: ${variables.whitePrimaryColor};
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
    font-family: ${variables.poppins};
    font-weight: ${variables.regular};
    letter-spacing: 0.05rem;
  }
`;
export const ContactFormTextArea = styled.textarea`
  height: 6rem;
  margin-top: 2rem;
  resize: none;
  background-color: transparent;
  padding-left: 0.2rem;
  padding-top: 2rem;
  border: none;
  border-bottom: 0.2rem solid ${variables.whitePrimaryColor};
  ${variables.whitePrimaryColor};
  border-radius:0px;
  font-size: 1.6rem;
  color: ${variables.whitePrimaryColor};
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
    font-family: ${variables.poppins};
    font-weight: ${variables.regular};
    letter-spacing: 0.05rem;
  }
`;
export const ContactButtonWrapper = styled.div`
  margin-top: 2rem;
`;
export const ContactButton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  height: 11rem;
  width: 11rem;
  background-color: ${variables.whitePrimaryColor};
  font-size: 1.5rem;
  font-weight: ${variables.semiBold};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${variables.poppins};
  animation: ${variables.fadeIn} 0.6s ease-in;
`;

// contact information
export const ContactInfoContainer = styled.div`
  margin-top: 3rem;
  animation: ${variables.fadeIn} 0.6s ease-in;
  padding-bottom: 6rem;
`;
export const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
export const ContactInfoTitle = styled.span(
  ({ style }) => css`
    font-size: 1.6rem;
    font-family: ${variables.poppins};
    margin-right: ${style.element.marginRight};
    color: ${variables.whitePrimaryColor};
    letter-spacing: 0.1rem;
  `
);
export const ContactInfoLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  color: ${variables.whitePrimaryColor};
  font-style: italic;
  opacity: 80%;
  font-family: ${variables.poppins};
  letter-spacing: 0.1rem;
`;

// copyrights
export const ContactCopyrightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: absolute;
  bottom: 0.5rem;
`;
export const ContactCopyrights = styled.span`
  font-size: 1.2rem;
  color: ${variables.whitePrimaryColor};
  font-family: ${variables.poppins};
  opacity: 50%;
`;
