import React, { useState, useEffect } from "react";

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
  const blurImage = useSelector((state) => state.projectsData.blur);
  const [value, setValue] = useState(0);
  const [styleProps, setStyleProps] = useState(false);

  // useEffect(() => {
  //   setValue(blurImage);
  //   if (value === id) {
  //     setStyleProps(true);
  //   }
  // }, [blurImage]);
  // const test = (id) => {
  //   dispatch(isBlur(id));
  // };

  return (
    <>
      <Styled.ProjectModelWrapper>
        <Styled.ProjectModelImageWrapper>
          <Styled.ProjectModelImage
            src={image}
            alt={"project-image"}
            style={{ styleProps }}
            onMouseLeave={() => layout(true)}
            onMouseEnter={() => layout(false)}
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
