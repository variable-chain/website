import React from "react";
import Navbar_Chain from "./components/NavbarChain";
import ChainEfficency from "./sections/ChainEfficiency";
import ChainFaster from "./sections/ChainFaster";
import ChainFooter from "./sections/ChainFooter";
import ChainWork from "./sections/ChainWork";
import Header_Chain from "./sections/Header_Chain";
import ChainFeature from "./sections/ChainFeature";
import ChainPowerfull from "./sections/ChainPowerfull";

const Chain: React.FC = () => {
  const handleToggle = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <Navbar_Chain onToggle={handleToggle} />
      <Header_Chain />
      <ChainEfficency />
      <ChainFaster />
      <ChainPowerfull />
      <ChainFeature />
      <ChainWork />
      <ChainFooter />
    </>
  );
};

export default Chain;
