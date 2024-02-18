import React from "react";
import styles from "./Header_Chain.module.scss";
import CustomButton from "../components/CustomButton";
import ChainPartners from "./ChainPartners";
import ZohoForm from "../components/ZohoForm";

const Header_Chain: React.FC = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
      <h1 className={styles.header_heading}>
        A Home to ZK-Powered Trading Apps Built on an Ethereum Native Modular
        Blockchain
      </h1>
      <p className={styles.header_sub}>
        Variable is a smart modular L2 scaling solution built using Polygon CDK
        and backed by Eigen layer for custom data availability and security.
      </p>
      <div className={styles.header_btn}>
        <CustomButton
          text="Bridge to Variable"
          textColor="white"
          bgColor="#3B62EC"
        />
        <div style={{ width: "20px" }} />
        <CustomButton text="Build Now" textColor="black" bgColor="white" />
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
