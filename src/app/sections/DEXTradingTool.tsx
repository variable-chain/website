import React from "react";
import styles from "./DEXTradingTool.module.scss";
import Image from "next/image";

const DEXTradingTool: React.FC = () => {
  return (
    <section className={styles.DEXTradingTool}>
      <h1 className={styles.DEXTradingTool_heading}>
        Discover the Unmatched Trading Tools
      </h1>
      <h2 className={styles.DEXTradingTool_subHeading}>
        Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on
        Variable’s Layer 2 scaling solution.
      </h2>
      <div className={styles.DEXTradingTool_card}>
        <div className={styles.DEXTradingTool_card_left}>
          <div className={styles.DEXTradingTool_card_heading}>Discover the Unmatched Trading Tools</div>
          <div className={styles.DEXTradingTool_card_content}>Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on 
Variable’s Layer 2 scaling solution.</div>
        </div>
        <div className={styles.DEXTradingTool_card_right}>
          <Image alt="Trading" src={"/Advanced_Trading_Tools_Section.svg"} width={300} height={250}/>
        </div>
      </div>
      <div className={styles.DEXTradingTool_card}>
        <div className={styles.DEXTradingTool_card_left}>
          <div className={styles.DEXTradingTool_card_heading}>Flexible Leverage and Risk Optimization (FLaRO)</div>
          <div className={styles.DEXTradingTool_card_content}>Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on 
Variable’s Layer 2 scaling solution.</div>
        </div>
        <div className={styles.DEXTradingTool_card_right}>
          <Image alt="Trading" src={"/Advanced_Trading_Tools_Section.svg"} width={300} height={250}/>
        </div>
      </div>
      <div className={styles.DEXTradingTool_card}>
        <div className={styles.DEXTradingTool_card_left}>
          <div className={styles.DEXTradingTool_card_heading}>On-Chart Trading</div>
          <div className={styles.DEXTradingTool_card_content}>Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on 
Variable’s Layer 2 scaling solution.</div>
        </div>
        <div className={styles.DEXTradingTool_card_right}>
        <Image alt="Trading" src={"/Advanced_Trading_Tools_Section_2.svg"} width={300} height={250}/>
        </div>
      </div>
    </section>
  );
};

export default DEXTradingTool;
