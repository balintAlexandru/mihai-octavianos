import React, { useState } from "react";

//STYLE
import * as Styled from "./ProjectsModelStyle";

// LIBRARIES
import PropTypes from "prop-types";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { isBlur } from "../../slices/projectsData";

const ProjectModel = (props) => {
  // PROPS
  const { image = "", id = 0 } = props;
  const dispatch = useDispatch();
  // CONSTANTS USING LIBRARIES
  const blurImage = useSelector((state) => state.projectsData.blur);

  return (
    <>
      <Styled.ProjectModelWrapper>
        <Styled.ProjectModelImageWrapper>
          <Styled.ProjectModelImage src={image} alt={"project-image"} />
        </Styled.ProjectModelImageWrapper>
      </Styled.ProjectModelWrapper>
    </>
  );
};

ProjectModel.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
};

export default ProjectModel;
