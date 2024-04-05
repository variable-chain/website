import React from "react";
import styles from "./DEXHedgeMode.module.scss";
import Image from "next/image";

const DEXHedgeMode: React.FC = () => {
  return (
    <section className={styles.hedgeMode}>
      <h1 className="heading_primary">
      Boost Returns with Hedge Mode
      </h1>
      <h2 className="heading_primary_sub">Switch to Hedge mode with just a click and protect your investments against market volatility by opening long and short positions for the same asset.</h2>
      <div className={styles.hedgeMode_image}>
      <Image src={"/HedgeMode.svg"} alt="Variable mockup" height={100} width={1000}/>
      </div>
    </section>
  )
}

export default DEXHedgeMode;