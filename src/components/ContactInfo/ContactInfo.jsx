import React from "react";

// STYLES
import * as Styled from "./ContactInfoStyle";

// LIBRARIES
import PropTypes from "prop-types";

const ContactInfo = (props) => {
  const { element = {}, index = 0 } = props;
  return (
    <Styled.ContactTextWrapper key={index} style={element}>
      <Styled.ContactText>{element.value}</Styled.ContactText>
    </Styled.ContactTextWrapper>
  );
};

ContactInfo.propTypes = {
  index: PropTypes.number,
  element: PropTypes.shape,
};

export default ContactInfo;
