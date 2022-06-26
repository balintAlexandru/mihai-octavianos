import React from "react";

// LIBRARIES
import PropTypes from "prop-types";

const Projects = (props) => {
  const { data } = props;
  console.log(data);
  return <img src={data[0].image} alt="" />;
};

export default Projects;
