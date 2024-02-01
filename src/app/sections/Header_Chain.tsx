import React from "react";
import styles from "./Header_Chain.module.scss";
import Image from "next/image";
import CustomButton from "../components/CustomButton";

const Header_Chain: React.FC = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.header_heading}>
          A Home to ZK-Powered Trading Apps Built on an Ethereum Native Modular
          Blockchain
        </h1>
        <p className={styles.header_sub}>
          Variable is a smart modular L2 scaling solution built using Polygon
          CDK and backed by Eigen layer for custom data availability and
          security.
        </p>
      <div className={styles.header_btn}>
        <CustomButton text="Bridge to Variable" />
        <CustomButton text="Build Now" bgColor="white" textColor="black" />
      </div>
    </header>
  );
};

export default Header_Chain;
