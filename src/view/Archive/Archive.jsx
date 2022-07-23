import React, { useEffect } from "react";

// CONSTANTS
import {
  changeBackgroundColor,
  enableScroll,
} from "../../helpers/globalFunctions";
import ARCHIVE from "../../constants/archive";

// STYLE
import * as Styled from "./ArchiveStyle";
import * as variables from "../../utils/Styles/variables";

console.log(ARCHIVE);
const Archive = () => {
  useEffect(() => {
    changeBackgroundColor(variables.whitePrimaryColor);
    enableScroll();
  }, []);
  return (
    <Styled.ArchiveContainer>
      <Styled.ArchiveImageWrapper>
        <Styled.ArchiveImage src={ARCHIVE[0].image} alt="picture" />
      </Styled.ArchiveImageWrapper>
      <Styled.ArchiveTitleWrapper></Styled.ArchiveTitleWrapper>
    </Styled.ArchiveContainer>
  );
};

export default Archive;
