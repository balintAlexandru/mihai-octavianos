// LIBRARIES
import styled, { css } from "styled-components";
import * as variables from "../../utils/Styles/variables";

// container
export const MenuLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${variables.whitePrimaryColor};
  position: absolute;
  top: 0;
  z-index: -1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// wrapper
export const MenuLayoutWrapper = styled.div`
  width: 100%;
`;
export const MenuLayoutLine = styled.div`
  background-color: ${variables.blackPrimaryColor};
  height: 0.2rem;
  width: 100%;
`;

// text
export const MenuLayoutTextWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const MenuLayoutText = styled.span`
  font-size: 3rem;
  cursor: pointer;
  font-weight: ${variables.bold};
  font-family: ${variables.poppins};
`;
