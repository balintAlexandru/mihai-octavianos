import React from "react";

//STYLE
import * as Styled from "./ProjectsModelStyle";

// LIBRARIES
import PropTypes from "prop-types";

const ProjectModel = (props) => {
  const { image, name } = props;
  return (
    <Styled.ProjectModelWrapper>
      <Styled.ProjectModelImageWrapper>
        <Styled.ProjectModelImage src={image} alt={name} />
      </Styled.ProjectModelImageWrapper>
    </Styled.ProjectModelWrapper>
  );
};

ProjectModel.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default ProjectModel;
