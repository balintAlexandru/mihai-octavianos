import React from "react";

// LIBRARIES
import PropTypes from "prop-types";

const Projects = (props) => {
  const { data } = props;
  console.log(data);

  return <div></div>;
};

Projects.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    height: PropTypes.string,
    projectData: PropTypes.shape({
      name: PropTypes.string,
      info: PropTypes.string,
      content: PropTypes.array([
        {
          image: PropTypes.string,
          height: PropTypes.string,
        },
      ]),
      nextProjectImage:PropTypes.string,
      projectLink : PropTypes.string
    }),
  }),
};
export default Projects;
