"use client";
import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import NavbarDex from "../components/NavbarDex";

export default function FAQs() {
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
