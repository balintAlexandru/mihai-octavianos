import React, { useEffect } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";

// STYLE
import * as Styled from "./ArchiveStyle";
import * as variables from "../../utils/Styles/variables";

const Archive = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);
  return (
    <Styled.ArchiveContainer>
      <Styled.ArchiveImageWrapper>
        <Styled.ArchiveImage src="" alt="" />
      </Styled.ArchiveImageWrapper>
      <Styled.ArchiveTitleWrapper></Styled.ArchiveTitleWrapper>
    </Styled.ArchiveContainer>
  );
};

export default Archive;
