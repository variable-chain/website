import React from "react";
import NavbarDex from "./components/NavbarDex";
import UnderConstruction from "./components/UnderConstruction";
import Header_DEX from "./sections/Header_DEX";
import DEXEcosystem from "./sections/DEXEcosystem";
import DEXTradingTool from "./sections/DEXTradingTool";

const Dex: React.FC = () => {
  const handleToggle = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <NavbarDex onToggle={handleToggle} />
      {/* <Header_DEX />
      <DEXEcosystem />
      <DEXTradingTool /> */}
      <UnderConstruction />
    </>
  );
};

export default Dex;
