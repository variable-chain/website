import React from "react";
import styles from "./Header_Chain.module.scss";
import CustomButton from "../components/CustomButton";
import ChainPartners from "./ChainPartners";
import ZohoForm from "../components/ZohoForm";
import Link from "next/link";

const Header_Chain: React.FC = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
      <h1 className={styles.header_heading}>
      Your Gateway to Future-Ready Trading Apps
      </h1>
      <p className={styles.header_sub}>
      Deploy blazing-fast trading applications on Variable, a modular L2 blockchain designed to amplify your trading power with unmatched concentrated liquidity, Trade, build, and thrive in an ecosystem, powered by Ethereum and Eigen Layer for security and custom data availability.
      </p>
      <div className={styles.header_btn}>
        <Link target="_blank" href="https://bridge.variable.foundation">
        <CustomButton
          text="Bridge to Variable"
          textColor="white"
          bgColor="#3B62EC"
          boxShadow={"[2px 2px 4px rgba(0, 0, 0, 0.1)]"}
        /></Link>
        <div style={{ width: "20px" }} />
        <Link target="_blank" href="/developerdocs">
        <CustomButton text="Build Now" textColor="black" bgColor="white" />
        </Link>
      </div>
      <div className={styles.header_form}>
        <ZohoForm />
        {/* <input type="text" className={styles.header_form_input} placeholder="john.doe@email.com"/>
        <span className={styles.header_form_btn}><CustomButton boxShadow="custom" bgColor="#0F0F0F" borderColor="#666666" borderWidth="1" textColor="#fff" text="Subscribe for updates" /></span> */}
      </div>
      <ChainPartners />
      </div>
    </header>
  );
};

export default Header_Chain;
