// LIBRARIES
import styled, { css } from "styled-components";

// CONSTANTS
import * as variables from "../../utils/Styles/variables";

// container
export const ArchiveContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;
`;

// images
export const ArchiveImageWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`;
export const ArchiveImage = styled.img`
  width: 100%;
  height: 100%;
`;

// title
export const ArchiveTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
`;
