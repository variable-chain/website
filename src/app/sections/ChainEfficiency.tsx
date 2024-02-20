import React from "react";
import styles from "./ChainEfficiency.module.scss";
import CustomButton from "../components/CustomButton";
import Image from "next/image";
import Link from "next/link";

const ChainEfficency: React.FC = () => {
  return (
    <div className={`${styles.efficency} container`}>
      <h2 className={styles.efficency_header}>
        Near-to Zero Costs with Maximum efficiency
      </h2>
      <div className={styles.efficency_container}>
        <div className={styles.efficency_container_left}>
          <div className={styles.efficency_container_left_heading}>
            Thanks to our modular architecture, Variable offers a near-to-zero
            gas fee infrastructure
          </div>
          <div className={styles.efficency_container_left_content}>
            A cost-effective alternative to traditional monolithic systems. We
            seamlessly blend the advanced capabilities of Layer 2 solutions and
            ZK-rollups to build a highly scalable and efficient blockchain for
            developers and traders.
          </div>
          <div className={styles.efficency_container_left_btn}>
          <Link target="_blank" href="/developerdocs">
            <CustomButton
              text="Start Building"
              svg='<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_76_224)">
<path d="M14.1681 4.19819L8.49999 0.916687L2.83194 4.19819L8.49999 7.47969L14.1681 4.19819ZM2.16666 5.35369V11.9167L7.83332 15.1974V8.63435L2.16666 5.35369ZM9.16666 15.1974L14.8333 11.9167V5.35369L9.16666 8.63435V15.1974Z" fill="#252525"/>
</g>
<defs>
<filter id="filter0_d_76_224" x="0.166656" y="-0.083313" width="16.6667" height="18.2808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_224"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_224" result="shape"/>
</filter>
</defs>
</svg>
'
            />
            </Link>
          </div>
        </div>
        <div className="efficency_container_right">
          <Image
            src={"/no_gas.png"}
            width={"428"}
            height={480}
            alt={"Gas station"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChainEfficency;
