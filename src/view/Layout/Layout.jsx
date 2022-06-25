import React from "react";

//STYLE
import * as Styled from "./LayoutStyle";

// ASSETS
import logo from "../../assets/IntroPage/logo.png";

// COMPONENTS
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

// REDUX
import { useSelector } from "react-redux";

const Layout = () => {
  let showMenu = useSelector((state) => state.menuLayout.value);

  return (
    <Styled.LayoutContainer>
      <Styled.LayoutLogoContainer>
        <Styled.LayoutLogoWrapper>
          {!showMenu && <Styled.LayoutLogo src={logo} />}
        </Styled.LayoutLogoWrapper>
      </Styled.LayoutLogoContainer>
      <Styled.MenuWrapper>
        <HamburgerMenu />
      </Styled.MenuWrapper>
      {showMenu && <Styled.MenuLayoutStyle />}
    </Styled.LayoutContainer>
  );
};

export default Layout;
