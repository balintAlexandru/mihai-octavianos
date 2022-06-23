import React from "react";

// COMPONENTS
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import MenuLayout from "../../components/MenuLayout/MenuLayout";

// REDUX
import { useSelector } from "react-redux";

const Projects = () => {
  const showMenu = useSelector((state) => state.menuLayout.value);

  return (
    <div>
      <HamburgerMenu />
      {showMenu && <MenuLayout />}
    </div>
  );
};

export default Projects;
