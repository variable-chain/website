import React from "react";
import styles from "./ChainFaster.module.scss";
import CustomButton from "../components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "../components/ui/background-beams";

const ChainFaster: React.FC = () => {
  return (
    <div className="`${styles.faster} container`">
      <h2 className={styles.faster_header}>Trade Faster than ever</h2>
      <div className={styles.faster_container}>
      <BackgroundBeams className={styles.efficency_container_beam} />
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
          <Link href="/developerdocs">
            <CustomButton
              text="Read our developer docs"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainFaster;
