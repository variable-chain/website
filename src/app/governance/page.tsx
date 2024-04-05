"use client";
import React from "react";
import NavbarChain from "../components/NavbarChain";
import UnderConstruction from "../components/UnderConstruction";

export default function Governance() {
    const handleToggle = () => {
        console.log("Button clicked!");
      };
      return (
        <>
          <NavbarChain onToggle={handleToggle} />
          <UnderConstruction />
        </>
    )
}
