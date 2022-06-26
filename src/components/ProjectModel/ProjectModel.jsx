import React, {useState, useEffect} from "react";

// LIBRARIES
import PropTypes from "prop-types";

import {db} from "../../firebase-config"
import {collection, getDocs } from "firebase/firestore"

const Projects = (props) => {
 const [projects, setProjects] = useState([]);
const projectsCollectionRef = collection(db, "projects");
useEffect(()=>{
  const getProjects = async () => {
    const data = await getDocs(projectsCollectionRef);
    setProjects(data.docs.map((doc) => ({...doc.data()})))
 
  }
  
  getProjects()
},[])
console.log(projects)
  const { data } = props;
  
  return (
    <img src={projects[0]?.NEXT_PROJECT_IMAGE} alt="test" />
  )
  //<img src={`data:image/jpeg;base64,${projects}` />)

};

export default Projects;
