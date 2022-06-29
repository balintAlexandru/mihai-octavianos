import React from "react";

//STYLE
import * as Styled from "./ProjectsModelStyle";

// LIBRARIES
import PropTypes from "prop-types";

// REDUX
import { useSelector } from "react-redux";

const ProjectModel = (props) => {
  // PROPS
  const { image = "", name = "", customStyle = false } = props;

  // CONSTANTS USING LIBRARIES

  return (
    <>
      <Styled.ProjectModelWrapper style={{ customStyle }}>
        <Styled.ProjectModelImageWrapper>
          <Styled.ProjectModelImage src={image} alt={name} />
        </Styled.ProjectModelImageWrapper>
      </Styled.ProjectModelWrapper>
    </>
  );
};

ProjectModel.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  customStyle: PropTypes.bool,
};

export default ProjectModel;
