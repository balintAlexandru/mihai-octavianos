import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//STYLE
import * as Styled from "./ProjectsModelStyle";

// LIBRARIES
import PropTypes from "prop-types";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { isBlur } from "../../slices/projectsData";

const ProjectModel = (props) => {
  // PROPS
  const { image = "", id = 0, layout = () => {} } = props;
  const dispatch = useDispatch();
  // CONSTANTS USING LIBRARIES
  const navigate = useNavigate();
  const blurImage = useSelector((state) => state.projectsData.blur);
  const [value, setValue] = useState(0);
  const [styleProps, setStyleProps] = useState(true);

  const handleScroll = useCallback(() => {
    layout(false);
  }, [layout]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Styled.ProjectModelWrapper>
        <Styled.ProjectModelImageWrapper>
          <Styled.ProjectModelImage
            src={image}
            alt={"project-image"}
            style={{ styleProps }}
            // onMouseLeave={() => layout(true)}
            onMouseEnter={() => layout(true)}
            onClick={() => navigate(`/project-${id}`)}
          />
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
