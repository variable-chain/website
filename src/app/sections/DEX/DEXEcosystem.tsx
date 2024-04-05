import React from "react";
import styles from "./DEXEcosystem.module.scss";
import Image from "next/image";
import ecoSystemImage from "/ecosystem.svg";

const DEXEcosystem: React.FC = () => {
  return (
    <section className={`${styles.ecosystem}`}>
      <h1 className="heading_primary">
      Unmatched CeX-like performance within a Decentralised Ecosystem
      </h1>
      <h2 className="heading_primary_sub">Trade with speed, navigate through a user-friendly interface, and leverage deep liquidity — all while maintaining unmatched security and full control over your assets.</h2>
      <div className={styles.ecosystem_image}>
      <Image src={"/ecosystem.svg"} alt="Variable mockup" height={100} width={1000}/>
      </div>
    </section>
  )
}

export default DEXEcosystem;