import React from "react";
import { useNavigate } from "react-router-dom";

//STYLE
import * as Styled from "./MenuLayoutStyle";

// CONSTANTS
import { MENU_MODEL } from "../../constants/constants";

const MenuLayout = () => {
  const navigate = useNavigate();

  return (
    <Styled.MenuLayoutContainer>
      <Styled.MenuLayoutWrapper>
        <Styled.MenuLayoutLine />
        <Styled.MenuLayoutTextWrapper>
          {MENU_MODEL.map((element, index) => (
            <Styled.MenuLayoutText
              key={index}
              onClick={() => navigate(element.path)}
            >
              {element.name}
            </Styled.MenuLayoutText>
          ))}
        </Styled.MenuLayoutTextWrapper>
      </Styled.MenuLayoutWrapper>
    </Styled.MenuLayoutContainer>
  );
};

export default MenuLayout;
