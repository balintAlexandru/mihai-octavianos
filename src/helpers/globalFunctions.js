export const currentPath = () => {
  return window?.location?.pathname;
};
export const changeBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};
export const disableScroll = () => {
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
};
export const enableScroll = () => {
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
};
