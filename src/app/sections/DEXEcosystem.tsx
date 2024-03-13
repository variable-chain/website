import React from "react";
import styles from "./DEXEcosystem.module.scss";
import Image from "next/image";

const DEXEcosystem: React.FC = () => {
  return (
    <section className={styles.ecosystem}>
      <h1 className={styles.ecosystem_heading}>
      Unmatched CeX-like performance within a Decentralised Ecosystem
      </h1>
      <h2 className={styles.ecosystem_subHeading}>Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on Variable’s Layer 2 scaling solution.</h2>
      <Image src={"/ecosystem.svg"} alt="Variable mockup" height={100} width={1000}/>
    </section>
  )
}

export default DEXEcosystem;