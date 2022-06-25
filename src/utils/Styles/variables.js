// LIBRARIES
import { keyframes } from "styled-components";

// color scheme
export const blackPrimaryColor = "#27282D";
export const whitePrimaryColor = "#FEFEFE";

// font props
export const regular = 400;
export const semiBold = 600;
export const bold = 800;
export const poppins = "Poppins, sans-serif";

// animation
export const fadeIn = keyframes`
 from { opacity: 0; }
 to { opacity: 1; }
`;
export const fadeOut = keyframes`
 from { opacity: 1; }
 to { opacity: 0; }
`;
export const drawLine = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;


// device size
// export const mobile = "599px";
// export const tabletLow = "600px";
// export const tabletHigh = "1279px";
// export const desktop = "1280px";
