import React from "react";
import NavbarDex from "./components/NavbarDex";
import UnderConstruction from "./components/UnderConstruction";
import Header_DEX from "./sections/DEX/Header_DEX";
import DEXEcosystem from "./sections/DEX/DEXEcosystem";
import DEXTradingTool from "./sections/DEX/DEXTradingTool";
import DEXTradingHorizons from "./sections/DEX/DEXTradingHorizons";
import DEXTradingExperience from "./sections/DEX/DEXTradingExperience";
import DEXMultiChainDeposits from "./sections/DEX/DEXMultiChainDeposits";
import DEXHedgeMode from "./sections/DEX/DEXHedgeMode";
import DEXFooter from "./sections/DEX/DEXFooter";
import DEXRevenueSharing from "./sections/DEX/DEXRevenueSharing";

const Dex: React.FC = () => {
  const handleToggle = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <NavbarDex onToggle={handleToggle} />
      <Header_DEX />
      <DEXEcosystem />
      <DEXTradingExperience />
      <DEXMultiChainDeposits />
      <DEXHedgeMode />
      <DEXRevenueSharing />
      {/* <DEXTradingTool /> */}
      <DEXTradingHorizons />
      <DEXFooter />
      {/* <UnderConstruction /> */}
    </>
  );
};

export default Dex;
