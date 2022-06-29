import React, { useEffect } from "react";

//STYLE
import * as Styled from "./ProjectLayoutStyle";

// LIBRARIES
import PropTypes from "prop-types";

const ProjectLayout = (props) => {
  const { hideLayout } = props;
  // PROPS
  //   const { id = "", name = "" } = props;
  // CONSTANTS USING LIBRARIES

  return (
    <Styled.ProjectLayoutContainer onClick={() => hideLayout(false)}>
      <Styled.ProjectLayoutTitleWrapper>
        <Styled.ProjectLayoutTitle></Styled.ProjectLayoutTitle>
      </Styled.ProjectLayoutTitleWrapper>
    </Styled.ProjectLayoutContainer>
  );
};

export default ProjectLayout;
