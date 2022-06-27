import React from "react";
import { useNavigate } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { menuLayoutState } from "../../slices/Slice";

//STYLE
import * as Styled from "./MenuLayoutStyle";

// CONSTANTS
import { MENU_MODEL } from "../../constants/constants";
import { currentPath } from "../../helpers/globalFunctions";

const MenuLayout = (props) => {
  const { value } = props;
  //CONSTANTS USING LIBRARIES
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // HANDLE FUNCTIONS
  const menuLayoutFunctionality = (element) => {
    navigate(element.path);
    setTimeout(() => {
      dispatch(menuLayoutState());
    }, 400);
  };

  return (
    <Styled.MenuLayoutContainer style={{ value }}>
      <Styled.MenuLayoutWrapper>
        <Styled.MenuLayoutLine />
        <Styled.MenuLayoutTextWrapper>
          {MENU_MODEL.map((element, index) => {
            return (
              <Styled.MenuLayoutTextLineWrapper key={index}>
                <Styled.MenuLayoutTextLineDimension>
                  <Styled.MenuLayoutText
                    style={currentPath() === element.path ? element.style : {}}
                    onClick={() => menuLayoutFunctionality(element)}
                  >
                    {element.name}
                  </Styled.MenuLayoutText>
                  <Styled.MenuLayoutTextLine
                    style={
                      window?.location?.pathname === element.path
                        ? element.style
                        : {}
                    }
                  />
                </Styled.MenuLayoutTextLineDimension>
              </Styled.MenuLayoutTextLineWrapper>
            );
          })}
        </Styled.MenuLayoutTextWrapper>
        <Styled.MenuLayoutSocialMediaWrapper>
          <Styled.MenuLayoutSocialMedia
            href="https://www.instagram.com/mihaioctavianos/"
            target="_blank"
          >
            @mihaioctavianos
          </Styled.MenuLayoutSocialMedia>
        </Styled.MenuLayoutSocialMediaWrapper>
      </Styled.MenuLayoutWrapper>
    </Styled.MenuLayoutContainer>
  );
};

export default MenuLayout;
