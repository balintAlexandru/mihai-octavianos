import styled from "styled-components";
import * as variables from "../../utils/Styles/variables";
import MenuLayout from "../../components/MenuLayout/MenuLayout";

// container
export const LayoutContainer = styled.div`
  display: flex;
`;

// wrapper
export const MenuWrapper = styled.div`
  float: right;
  padding: 1rem;
`;
export const MenuLayoutStyle = styled(MenuLayout)``;

// logo
export const LayoutLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  padding: 2rem;
  z-index: -2;
`;
export const LayoutLogoWrapper = styled.div`
  width: 6rem;
  height: 6rem;
`;
export const LayoutLogo = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${variables.fadeIn} 0.5s ease-in forwards;
`;
