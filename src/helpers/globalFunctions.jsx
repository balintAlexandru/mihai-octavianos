const body = document.querySelector("body");

export const currentPath = () => {
  return window?.location?.pathname;
};
export const changeBackgroundColor = (color) => {
  body.style.backgroundColor = color;
};
