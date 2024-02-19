import React from "react";
import NavbarDex from "./components/NavbarDex";
import UnderConstruction from "./components/UnderConstruction";

const Dex: React.FC = () => {
  const handleToggle = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <NavbarDex onToggle={handleToggle} />
      <UnderConstruction />
    </>
  );
};

export default Dex;
