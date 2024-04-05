import React from "react";
import styles from "./DEXTradingExperience.module.scss";
import Image from "next/image";
import ecoSystemImage from "/ecosystem.svg";

const DEXTradingExperience: React.FC = () => {
  return (
    <section className={styles.tradingExperience}>
      <h1 className="heading_primary">
      Unbeatable Trading Tools for a hassle-free Trading Experience
      </h1>
      {/* <h2 className="heading_primary_sub">Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on Variable’s Layer 2 scaling solution.</h2> */}
      <Image src={"/CEX_Like_performance.svg"} alt="Variable mockup" height={100} width={1200}/>
      <Image src={"/InteractiveChartTrading.svg"} alt="Variable mockup" height={100} width={1200}/>
    </section>
  )
}

export default DEXTradingExperience;