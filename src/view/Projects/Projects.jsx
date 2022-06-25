import React from "react";

//STYLE
import * as Styled from "./ProjectsStyle";

// COMPONENTS
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import MenuLayout from "../../components/MenuLayout/MenuLayout";

// REDUX
import { useSelector } from "react-redux";

const Projects = () => {
  const showMenu = useSelector((state) => state.menuLayout.value);

  return (
    <Styled.ProjectContainer>
      <Styled.MenuWrapper>
        <HamburgerMenu />
      </Styled.MenuWrapper>
      {showMenu && <Styled.MenuLayoutStyle />}
    </Styled.ProjectContainer>
  );
};

export default Projects;
