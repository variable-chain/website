import React from "react";
import styles from "./ChainFaster.module.scss";
import CustomButton from "../components/CustomButton";
import Image from "next/image";
import Link from "next/link";

const ChainFaster: React.FC = () => {
  return (
    <div className="`${styles.faster} container`">
      <h2 className={styles.faster_header}>Trade Faster than ever</h2>
      <div className={styles.faster_container}>
        <div className={styles.faster_container_left}>
          <Image
            src={"/trade_faster.png"}
            width={"428"}
            height={480}
            alt={"Gas station"}
          />
        </div>
        <div className={styles.faster_container_right}>
          <div className={styles.faster_container_right_heading}>
            Get instantaneous transaction finalization and immediate settlement
            with Variable.
          </div>
          <div className={styles.faster_container_right_content}>
            Make informed decisions, manage risk effectively, and gain a
            competitive edge with lightning-fast transaction speed in the
            dynamic trading world.
          </div>
          <div className={styles.faster_container_right_btn}>
          <Link target="_blank" href="/developerdocs">
            <CustomButton
              text="Trade on vairable DEX"
              svg='<svg width="17" height="17" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4001 2.54797H3V16.8496H11.4001V2.54797Z" fill="#3B62EC"/>
                <path d="M19.8036 16.8491H11.4034V31.1506H19.8036V16.8491Z" fill="#3B62EC"/>
                <path d="M28.1969 31.1504H19.7968V45.452H28.1969V31.1504Z" fill="#3B62EC"/>
                <path d="M36.5965 16.8491H28.1964V31.1506H36.5965V16.8491Z" fill="#3B62EC"/>
                <path d="M45 2.54797H36.5999V16.8496H45V2.54797Z" fill="#3B62EC"/>
                </svg>'
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainFaster;
