import React, { useEffect, useState } from "react";

// CONSTANTS
import {
  CONTACT_TEXT_MODEL,
  CONTACT_FORM_MODEL,
  CONTACT_INFO_MODEL,
} from "../../constants/constants";
import * as variables from "../../utils/Styles/variables";
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

//STYLE
import * as Styled from "./ContactStyle";

// REDUX
import { useSelector } from "react-redux";

const Contact = () => {
  // GENERAL CONSTANTS
  let showContent = useSelector((state) => state.menuLayout.value);

  // CONSTANTS USING HOOKS

  // HANDLE FUNCTIONS
  useEffect(() => {
    changeBackgroundColor(variables.blackPrimaryColor);
    enableScroll();
  }, []);

  return (
    <Styled.ContactContainer style={{ showContent }}>
      <Styled.ContactLine style={{ marginTop: "10rem" }} />

      <Styled.ContactIntroTextWrapper>
        <Styled.ContactIntroText>
          WANNA DISCUSS A NEW PROJECT?
        </Styled.ContactIntroText>
      </Styled.ContactIntroTextWrapper>

      <Styled.ContactFormContainer>
        <Styled.ContactFormWrapper>
          <Styled.ContactTextWrapper>
            <Styled.ContactText>GET IN TOUCH</Styled.ContactText>
          </Styled.ContactTextWrapper>
          <Styled.ContactFormInputName placeholder={"Name"} />
          <Styled.ContactFormInputEmail placeholder={"E-mail"} />
          <Styled.ContactFormTextArea placeholder={"Your Message"} />
        </Styled.ContactFormWrapper>
        <Styled.ContactButtonWrapper>
          <Styled.ContactButton onClick={() => console.log("da")}>
            LET 'S TALK
          </Styled.ContactButton>
        </Styled.ContactButtonWrapper>
      </Styled.ContactFormContainer>

      <Styled.ContactLine style={{ marginTop: "5rem" }} />
      <Styled.ContactInfoContainer>
        <Styled.ContactInfoTextWrapper>
          {CONTACT_INFO_MODEL?.map((element, index) => (
            <Styled.ContactInfoWrapper key={index}>
              <Styled.ContactInfoTitle style={{ element }}>
                {element.title}
              </Styled.ContactInfoTitle>
              <Styled.ContactInfoLink href={element.link || ""} target="_blank">
                {element.info}
              </Styled.ContactInfoLink>
            </Styled.ContactInfoWrapper>
          ))}
        </Styled.ContactInfoTextWrapper>
      </Styled.ContactInfoContainer>
      <Styled.ContactCopyrightsWrapper>
        <Styled.ContactCopyrights>
          Copyright Mihai Octavianos &copy; - all rights reserved
        </Styled.ContactCopyrights>
      </Styled.ContactCopyrightsWrapper>
    </Styled.ContactContainer>
  );
};

export default Contact;
