import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuLayoutState, pageChangeState } from "../../slices/Slice";
//STYLE
import * as Styled from "./MenuLayoutStyle";

// CONSTANTS
import { MENU_MODEL } from "../../constants/constants";

// REDUX
import { useSelector } from "react-redux";

const MenuLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // HANDLE CHANGE
  const menuLayoutFunctionality = (element) => {
      navigate(element.path)
      dispatch(menuLayoutState())
  }
  return (
    <Styled.MenuLayoutContainer>
      <Styled.MenuLayoutWrapper>
        <Styled.MenuLayoutLine />
        <Styled.MenuLayoutTextWrapper>
          {MENU_MODEL.map((element, index) => (
            <Styled.MenuLayoutText
              key={index}
              onClick={() => menuLayoutFunctionality(element)}
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
