import React from "react";
import styles from "./ChainPowerfull.module.scss";
import Image from "next/image";

const ChainPowerful: React.FC = () => {
  return (
    <>
      <h2 className={styles.powerfull_heading}>
        Build powerful trading machines with Variable
      </h2>
      <div className={styles.powerfull_container}>
        <div className={`${styles.powerfull_card} ${styles.powerfull_card_1}`}>
            <Image src={'/powerfull_111.svg'} alt="Powerfull 1" width={'428'} height={480}/>
            <p className={`${styles.powerfull_content} ${styles.powerfull_card_1_content}`}>Active Developer Community for endless support</p>
        </div>
        <div className={styles.powerfull_container_section}>
          <div className={styles.powerfull_card}>
            <Image className={styles.powerfull_3_image} src={'/powerfull_21.png'} alt="Powerfull 3" width={'357'} height={164}/>
            <p className={styles.powerfull_content}>Open-source code for transparency and customization</p>
          </div>
          <div className={styles.powerfull_card}>
            <Image className={styles.powerfull_3_image} src={'/powerfull_3.svg'} quality={100} alt="Powerfull 3" width={'357'} height={164}/>
            <p className={styles.powerfull_content}>Dedicated support from us throughout the development process</p>
          </div>
        </div>
        <div className={`${styles.powerfull_card} ${styles.powerfull_card_4}`}>
            <Image src={'/powerfull_412.png'} alt="Powerfull 3" width={'337'} height={480}/>
            <p className={`${styles.powerfull_content} ${styles.powerfull_card_4_content}`}>Detailed Comprehensive Guide to get you started quickly</p>
        </div>
      </div>
    </>
  );
};

export default ChainPowerful;
