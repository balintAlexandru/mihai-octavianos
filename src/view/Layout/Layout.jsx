import React from "react";

//STYLE
import * as Styled from "./LayoutStyle";

// COMPONENTS
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

// REDUX
import { useSelector } from "react-redux";

const Layout = () => {
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

export default Layout;