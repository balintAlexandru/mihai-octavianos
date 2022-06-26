import React from "react";

//STYLE
import * as Styled from "./ProjectsModelStyle";

// LIBRARIES
import PropTypes from "prop-types";

// REDUX
import { useSelector } from "react-redux";

const ProjectModel = (props) => {
  // PROPS
  const { image = "", name = "" } = props;

  // CONSTANTS USING LIBRARIES
  const firstAnimation = useSelector((state) => state.projectsData.skipValue);

  return (
    <Styled.ProjectModelWrapper style={{ firstAnimation }}>
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
