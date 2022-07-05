import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";
import PROJECTS from "../../constants/projects";

// STYLE
import * as variables from "../../utils/Styles/variables";
import * as Styled from "./ProjectPageStyle";

// REDUX
import { useSelector } from "react-redux";
import { Style } from "@mui/icons-material";

const ProjectPage = () => {
  const { id } = useParams();
  const PROJECTS_DATA = useSelector((state) => state.projectsData.value);

  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);

  console.log(PROJECTS_DATA[id]);
  return (
    <Styled.ProjectPageHeroContainer>
      <Styled.ProjectPageHeroName>
        {PROJECTS[id]?.name}
      </Styled.ProjectPageHeroName>
      <Styled.ProjectPageHeroInfo>
        {PROJECTS[id]?.intro_text}
      </Styled.ProjectPageHeroInfo>
    </Styled.ProjectPageHeroContainer>
    // <>
    //   {PROJECTS_DATA[id]?.IMAGE_CONTENT?.map((element) => (
    //     <img src={element.IMAGE} />
    //   ))}
    // </>
  );
};

export default ProjectPage;
