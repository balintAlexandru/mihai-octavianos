import React from "react";

// STYLES
import * as Styled from "./ContactInfoStyle";

// LIBRARIES
import PropTypes from "prop-types";

const ContactInfo = (element = {}, index = 0) => {
  console.log(element, index);
  return (
    <Styled.ContactTextWrapper key={index} style={element}>
      <Styled.ContactText>{element.value}</Styled.ContactText>
    </Styled.ContactTextWrapper>
  );
};

ContactInfo.propTypes = {};

export default ContactInfo;
