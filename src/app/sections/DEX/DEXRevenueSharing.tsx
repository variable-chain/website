import React from "react";
import styles from "./DEXRevenueSharing.module.scss";
import Image from "next/image";

const DEXRevenueSharing: React.FC = () => {
  return (
    <section className={styles.ecosystem}>
       <div className={styles.DEXRevenueSharing}>
        <div className={styles.DEXRevenueSharing_container}>
          <div className={styles.DEXRevenueSharing_left}>
            <div className={`heading_secondary ${styles.DEXRevenueSharing_heading}`}>
            Additional Earnings with our Revenue Sharing Model
            </div>
            <div className="heading_secondary_sub">
            Over half of Variable's total revenue (53%) flows back to traders and Market makers in the form of additional rewards with each trade they do.
            </div>
          </div>
          <div className={styles.DEXRevenueSharing_right}>
          <div className={styles.DEXRevenueSharing_image}>
          <Image src={"/DEXRevenueSharing.svg"} alt="Variable mockup" height={100} width={600}/>
          </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default DEXRevenueSharing;