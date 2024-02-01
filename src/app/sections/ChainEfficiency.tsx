import React from "react";
import styles from "./ChainEfficiency.module.scss";
import CustomButton from "../components/CustomButton";
import Image from "next/image";

const ChainEfficency: React.FC = () => {
    return (
        <div className="`${styles.efficency} container mx-auto`">
            <h2 className={styles.efficency_header}>Near-to Zero Costs with Maximum efficiency</h2>
            <div className={styles.efficency_container}>
                <div className={styles.efficency_container_left}>
                    <div className={styles.efficency_container_left_heading}>Thanks to our modular architecture, Variable offers a near-to-zero gas fee infrastructure</div>
                    <div className={styles.efficency_container_left_content}>A cost-effective alternative to traditional monolithic systems. We seamlessly blend the advanced capabilities of Layer 2 solutions and ZK-rollups to build a highly scalable and efficient blockchain for developers and traders.</div>
                    <div className={styles.efficency_container_left_btn}><CustomButton text="Start Building" /></div>
                </div>
                <div className="efficency_container_right">
                    <Image src={'/Gas_pump.svg'} width={'300'} height={400} alt={"Gas station"} />
                </div>
            </div>
        </div>
    )
}

export default ChainEfficency;