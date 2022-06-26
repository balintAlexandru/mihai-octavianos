import React, { useEffect } from "react";

// CONSTANTS
import {
  CONTACT_TEXT_MODEL,
  CONTACT_FORM_MODEL,
  CONTACT_INFO_MODEL,
} from "../../constants/constants";
import * as variables from "../../utils/Styles/variables";
import { changeBackgroundColor } from "../../helpers/globalFunctions";

//STYLE
import * as Styled from "./ContactStyle";

// REDUX
import { useSelector } from "react-redux";


const Contact = () => {
  let showContent = useSelector((state) => state.menuLayout.value);
  useEffect(() => {
    changeBackgroundColor(variables.blackPrimaryColor);
  }, []);
  return (
    <Styled.ContactContainer style={{ showContent }}>
      <Styled.ContactLine style={{ marginTop: "10rem" }} />
      {CONTACT_TEXT_MODEL?.map((element, index) => (
        <Styled.ContactTextWrapper key={index} style={element}>
          <Styled.ContactText>{element.value}</Styled.ContactText>
        </Styled.ContactTextWrapper>
      ))}
      <Styled.ContactFormWrapper>
        {CONTACT_FORM_MODEL?.map((element, index) => {
          if (element.type === "input") {
            return (
              <Styled.ContactFormInput
                key={index}
                placeholder={element.name}
              ></Styled.ContactFormInput>
            );
          } else if (element.type === "textarea") {
            return (
              <Styled.ContactFormTextArea
                key={index}
                placeholder={element.name}
              ></Styled.ContactFormTextArea>
            );
          } else {
            return null;
          }
        })}
      </Styled.ContactFormWrapper>
      <Styled.ContactButtonWrapper>
        <Styled.ContactButton onClick={() => console.log("da")}>
          LET 'S TALK
        </Styled.ContactButton>
      </Styled.ContactButtonWrapper>
      <Styled.ContactLine style={{ marginTop: "5rem" }} />
      <Styled.ContactInfoContainer>
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
