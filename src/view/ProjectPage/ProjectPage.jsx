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
    <Styled.ProjectPageContainer>
      <Styled.ProjectPageHeroWrapper>
        <Styled.ProjectPageHeroImage src={PROJECTS[id]?.content.hero_image} />
      </Styled.ProjectPageHeroWrapper>
      <Styled.ProjectPageHeroInfoContainer>
        <Styled.ProjectPageHeroInfoWrapper>
          <Styled.ProjectPageHeroInfoNameWrapper>
            <Styled.ProjectPageHeroInfoName>
              {PROJECTS[id]?.name}
            </Styled.ProjectPageHeroInfoName>
          </Styled.ProjectPageHeroInfoNameWrapper>
          <Styled.ProjectPageHeroInfoTextWrapper>
            <Styled.ProjectPageHeroInfoText>
              {PROJECTS[id]?.intro_text}
            </Styled.ProjectPageHeroInfoText>
          </Styled.ProjectPageHeroInfoTextWrapper>

          <Styled.ProjectPageHeroScrollTextWrapper>
            <Styled.ProjectPageHeroScrollText>
              Scroll down
            </Styled.ProjectPageHeroScrollText>
          </Styled.ProjectPageHeroScrollTextWrapper>
        </Styled.ProjectPageHeroInfoWrapper>
      </Styled.ProjectPageHeroInfoContainer>
      {/* <Styled.ProjectPageHeroName>
        {PROJECTS[id]?.name}
      </Styled.ProjectPageHeroName>
      <Styled.ProjectPageHeroInfo>
        {PROJECTS[id]?.intro_text}
      </Styled.ProjectPageHeroInfo>*/}
    </Styled.ProjectPageContainer>
  );
};

export default ProjectPage;
