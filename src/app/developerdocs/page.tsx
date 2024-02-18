"use client";
import React from "react";
import styles from "./pages.module.scss";
import NavbarChain from "../components/NavbarChain";
import Image from "next/image";

export default function DeveloperDocs() {
    const handleToggle = () => {
        console.log("Button clicked!");
      };
      return (
        <>
          <NavbarChain onToggle={handleToggle} />
      <div
        className="page_container"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Image
          src="/under_construction.svg"
          width={800}
          height={700}
          style={{ maxWidth: "80%", minWidth: "30%" }}
          alt="Under construction"
        />
        <h1 style={{fontSize: "2vw", fontWeight: 600, color: "#3B62EC", marginTop: "15px"}}>Page Under Construction</h1>
        <p style={{fontSize: "1.1vw", marginTop: "15px"}}>This page is being updated. Please return to the previous page.</p>
      </div>
        </>
    )
}
