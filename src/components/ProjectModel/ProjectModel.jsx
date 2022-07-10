import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//STYLE
import * as Styled from "./ProjectsModelStyle";

// LIBRARIES
import PropTypes from "prop-types";

const ProjectModel = (props) => {
  // PROPS
  const { image = "", id = 0, styleType = "" } = props;
  // CONSTANTS USING LIBRARIES
  const navigate = useNavigate();

  const handleClick = (style) => {
    if (style === "projects") {
      navigate(`/project-${id}`);
    }
  };
  return (
    <>
      <Styled.ProjectModelWrapper style={{ styleType }}>
        <Styled.ProjectModelImageWrapper>
          <Styled.ProjectModelImage
            src={image}
            alt={"project-image"}
            onClick={() => handleClick(styleType)}
          />
        </Styled.ProjectModelImageWrapper>
      </Styled.ProjectModelWrapper>
    </>
  );
};

ProjectModel.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  styleType: PropTypes.string,
};

export default ProjectModel;
