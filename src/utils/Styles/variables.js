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
export const fadeInProject = keyframes`
 from {
   opacity: 0;
   visibility: hidden;
 }
 to { 
   opacity: 1;
   visibility: visible;
 }
`;
export const fadeOut = keyframes`
 from { opacity: 1; }
 to { opacity: 0;}
`;
export const drawLine = keyframes`
  from { width: 0%; }
  to { width: 80%; }
`;
export const fadeOutMenuLayout = keyframes`
  0% { opacity: 1;

}
100% {
  opacity: 0;
  z-index:-5
}
`;
export const fadeInMenuLayout = keyframes`
   0% { opacity: 0;

}
99% {
  opacity: 1;
  z-index:2;
}
`;
// device size
// export const mobile = "599px";
// export const tabletLow = "600px";
// export const tabletHigh = "1279px";
// export const desktop = "1280px";

// Z-INDEX: 1 ====> MENU LAYOUT
// Z-INDEX: 2 ====> MENU HAMBURGER
// Z-INDEX: 0 ====> LOGO
