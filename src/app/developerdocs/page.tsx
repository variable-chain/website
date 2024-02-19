"use client";
import React from "react";
import styles from "./pages.module.scss";
import NavbarChain from "../components/NavbarChain";
import Image from "next/image";
import UnderConstruction from "../components/UnderConstruction";

export default function DeveloperDocs() {
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
