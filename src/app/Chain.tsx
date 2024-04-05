import React from "react";
import Navbar_Chain from "./components/NavbarChain";
import ChainEfficency from "./sections/Chain/ChainEfficiency";
import ChainFaster from "./sections/Chain/ChainFaster";
import ChainFooter from "./sections/Chain/ChainFooter";
import ChainWork from "./sections/Chain/ChainWork";
import Header_Chain from "./sections/Chain/Header_Chain";
import ChainFeature from "./sections/Chain/ChainFeature";
import ChainPowerfull from "./sections/Chain/ChainPowerfull";

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
