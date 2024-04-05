import React from "react";
import styles from "./DEXMultiChainDeposits.module.scss";
import Image from "next/image";
import ecoSystemImage from "/ecosystem.svg";

const DEXMultiChainDeposits: React.FC = () => {
  return (
    <>
      <div className={styles.DEXMultiChainDeposits}>
        <div className={`${styles.DEXMultiChainDeposits_container} container`}>
          <div className={styles.DEXMultiChainDeposits_left}>
            <div className={`heading_secondary ${styles.DEXMultiChainDeposits_heading}`}>
              Bridge Blockchains with Seamless MultiChain Deposits
            </div>
            <div className="heading_secondary_sub">
            Transfer and leverage your cryptocurrencies across diverse blockchain networks with our intuitive Multichain Deposit feature and trade hassle-free.
            </div>
          </div>
          <div className={styles.DEXMultiChainDeposits_right}>
          <div className={styles.DEXMultiChainDeposits_image}>
          <Image src={"/MultichainDeposits.svg"} alt="Variable mockup" height={100} width={600}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DEXMultiChainDeposits;
