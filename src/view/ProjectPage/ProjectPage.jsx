import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
import ProjectModel from "../../components/ProjectModel/ProjectModel";

const ProjectPage = () => {
  const { id } = useParams();
  const PROJECTS_DATA = useSelector((state) => state.projectsData.value);
  const navigate = useNavigate();

  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);

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

      <Styled.ProjectPageButtonWrapper onClick={() => navigate("/projects")}>
        <Styled.ProjectPageButtonContent>
          <Styled.ProjectPageButtonIconWrapper>
            <Styled.ProjectPageButtonIcon />
          </Styled.ProjectPageButtonIconWrapper>
          <Styled.ProjectPageButtonTextWrapper>
            <Styled.ProjectPageButtonText>Back</Styled.ProjectPageButtonText>
          </Styled.ProjectPageButtonTextWrapper>
        </Styled.ProjectPageButtonContent>
      </Styled.ProjectPageButtonWrapper>

      <Styled.ProjectPageLineTopWrapper>
        <Styled.ProjectPageTopLine />
      </Styled.ProjectPageLineTopWrapper>

      <Styled.ProjectPageImagesWrapper>
        <Styled.ProjectPageImagesLeft>
          {PROJECTS[id].content.images?.map(
            (data, index) =>
              index <= 1 &&
              index >= 0 && (
                <ProjectModel
                  key={index}
                  id={index}
                  image={data}
                  styleType="projectPage"
                />
              )
          )}
        </Styled.ProjectPageImagesLeft>
        <Styled.ProjectPageImageRight>
          {PROJECTS[id].content.images?.map(
            (data, index) =>
              index >= 2 &&
              index <= 4 && (
                <ProjectModel
                  key={index}
                  id={index}
                  image={data}
                  styleType="projectPage"
                />
              )
          )}
        </Styled.ProjectPageImageRight>
      </Styled.ProjectPageImagesWrapper>

      <Styled.ProjectPageLineWrapper>
        <Styled.ProjectPageLine />
      </Styled.ProjectPageLineWrapper>

      <Styled.ProjectPageNextPageWrapper>
        <Styled.ProjectPageNextPageImageWrapper>
          <Styled.ProjectPageNextPageImage
            src={PROJECTS[id].next_project_image}
            alt="next iamge"
          />
        </Styled.ProjectPageNextPageImageWrapper>
        <Styled.ProjectPageNextPageTextWrapper
          onClick={() =>
            navigate(
              `/project-${
                PROJECTS[id].next_project_id === PROJECTS.length
                  ? 0
                  : PROJECTS[id].next_project_id
              }`
            )
          }
        >
          <Styled.ProjectPageNextPageText>NEXT</Styled.ProjectPageNextPageText>
        </Styled.ProjectPageNextPageTextWrapper>
      </Styled.ProjectPageNextPageWrapper>
    </Styled.ProjectPageContainer>
  );
};

export default ProjectPage;
