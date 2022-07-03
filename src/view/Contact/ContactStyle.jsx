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
    @media (min-width: ${variables.desktop}) {
      height: 100vh;
    }
  `
);

// top line
export const ContactLine = styled.div(
  ({ style }) => css`
    height: 0.1rem;
    width: 80%;
    opacity: 60%;
    background-color: ${variables.whitePrimaryColor};
    margin-top: ${style.marginTop};
    animation: ${variables.drawLine} 1.6s ease-in;
  `
);

//text
export const ContactIntroTextWrapper = styled.div(
  ({ style }) => css`
    width: 90%;
    margin-top: 2rem;
    @media (min-width: ${variables.desktop}) {
    }
  `
);
export const ContactIntroText = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 3rem;
  text-align: left;
  font-family: ${variables.poppins};
  animation: ${variables.fadeIn} 1.2s ease-in;
  font-weight: 600;
  @media (min-width: ${variables.desktop}) {
    font-size: 7.5rem;
    font-weight: 600;
  }
`;

export const ContactTextWrapper = styled.div(
  ({ style }) => css`
    width: 90%;
    margin-top: 12rem;
    @media (min-width: ${variables.desktop}) {
      font-size: 5rem;
      font-weight: 400;
    }
  `
);
export const ContactText = styled.span`
  color: ${variables.whitePrimaryColor};
  font-size: 3rem;
  text-align: left;
  font-family: ${variables.poppins};
  animation: ${variables.fadeIn} 1.2s ease-in;
  font-weight: 600;
  @media (min-width: ${variables.desktop}) {
    font-size: 5rem;
    font-weight: 400;
  }
`;

// contact form
export const ContactFormContainer = styled.div`
  @media (min-width: ${variables.desktop}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  animation: ${variables.fadeIn} 1.2s ease-in;
  @media (min-width: ${variables.desktop}) {
    width: 40%;
  }
`;
export const ContactFormInputName = styled.input(
  ({ style }) => css`
    height: 3rem;
    margin-top: 3.5rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.2rem solid ${variables.whitePrimaryColor};
    border-radius: 0px;
    font-size: 1.6rem;
    padding-left: 0.2rem;
    color: ${variables.whitePrimaryColor};
    &:focus {
      outline: none;
    }
    &focus::placeholder {
      color: transparent;
    }
    ::placeholder {
      color: white;
      font-family: ${variables.poppins};
      font-weight: ${variables.regular};
      letter-spacing: 0.05rem;
    }
    input:focus::placeholder {
      color: transparent;
    }
  `
);
export const ContactFormInputEmail = styled.input(
  ({ style }) => css`
    height: 3rem;
    margin-top: 1.5rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.2rem solid ${variables.whitePrimaryColor};
    border-radius: 0px;
    font-size: 1.6rem;
    padding-left: 0.2rem;
    color: ${variables.whitePrimaryColor};
    &:focus {
      outline: none;
    }
    &focus::placeholder {
      color: transparent;
    }
    ::placeholder {
      color: #f0eaea;
      font-family: ${variables.poppins};
      font-weight: ${variables.regular};
      letter-spacing: 0.05rem;
    }
  `
);
export const ContactFormTextArea = styled.textarea`
  height: 6rem;
  margin-top: 1rem;
  resize: none;
  background-color: transparent;
  padding-left: 0.2rem;
  padding-top: 2rem;
  border: none;
  border-bottom: 0.2rem solid ${variables.whitePrimaryColor};
  ${variables.whitePrimaryColor};
  border-radius: 0px;
  font-size: 1.6rem;
  color: ${variables.whitePrimaryColor};
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #f0eaea;
    font-family: ${variables.poppins};
    font-weight: ${variables.regular};
    letter-spacing: 0.05rem;
  }
`;
export const ContactButtonWrapper = styled.div`
  margin-top: 2rem;
  padding-bottom: 3rem;
  @media (min-width: ${variables.desktop}) {
    width: 40%;
  }
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
  animation: ${variables.fadeIn} 1.2s ease-in;
  @media (min-width: ${variables.desktop}) {
    &:hover {
      background-color: #cc8808d5;
      transition-duration: 500ms;
    }
  }
`;

// contact information
export const ContactInfoContainer = styled.div`
  margin-top: 3rem;
  animation: ${variables.fadeIn} 1.2s ease-in;
  padding-bottom: 6rem;
  @media (min-width: ${variables.desktop}) {
    width: 80%;
    display: flex;
    justify-content: end;
  }
`;
export const ContactInfoTextWrapper = styled.div`
  @media (min-width: ${variables.desktop}) {
    width: 100%;
    width: 20%;
  }
`;
export const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  @media (min-width: ${variables.desktop}) {
    width: 100%;
  }
`;
export const ContactInfoTitle = styled.span(
  ({ style }) => css`
    font-size: 1.6rem;
    font-family: ${variables.poppins};
    margin-right: ${style.element.marginRight};
    color: ${variables.whitePrimaryColor};
    letter-spacing: 0.1rem;
    @media (min-width: ${variables.desktop}) {
      font-weight: 600;
    }
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
