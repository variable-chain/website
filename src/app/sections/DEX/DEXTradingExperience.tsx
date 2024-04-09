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
      <div className={styles.tradingExperience_desktop}>
        <div className={styles.tradingExperience_image1}>
          <Image
            src={"/UnbeateableTradingImage.svg"}
            alt="Unbeateable Trading Image"
            height={100}
            width={1200}
          />
        </div>
        <div className="my-16 "></div>
        <Image
          src={"/InteractiveChartTrading.svg"}
          alt="Variable mockup"
          height={100}
          width={1200}
        />
      </div>
      <div className={styles.tradingExperience_mobile}>
        <Image
          src={"/UnbeatableimageMobile1.svg"}
          alt="Unbeateable Trading Image"
          height={100}
          width={1200}
        />
        <div className="my-16 "></div>
        <Image
          src={"/UnbeatableimageMobile2.svg"}
          alt="Unbeateable Trading Image"
          height={100}
          width={1200}
        />
      </div>
    </section>
  );
};

export default DEXTradingExperience;
