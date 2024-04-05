"use client";
import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import NavbarDex from "../components/NavbarDex";

export default function Community() {
    const handleToggle = () => {
        console.log("Button clicked!");
      };
      return (
        <>
          <NavbarDex onToggle={handleToggle} />
          <UnderConstruction />
        </>
    )
}
