import React from "react";
import styles from "./ChainFeature.module.scss";
import CardChainFeature from "../../components/CardChainFeature";

const ChainFeature: React.FC = () => {
  return (
    <>
      <div className={styles.feature_heading}>
        Powerful Features to redefine your Trading experience
      </div>
      <div className={styles.feature_container}>
        <CardChainFeature
          className={styles.feature_card}
          title={"Enhanced SDK"}
          content="Effortlessly overcome the hurdles of bridging, liquidation, risk management, and much more with Variable’s robust SDK"
          svgURL={"/feature_1.svg"}
        />
        <CardChainFeature
        className={styles.feature_card}
          title={"Custom Data Availability"}
          content="Variable leverages Eigen Layer to exponentially increase data availability for ZK rollups, enabling massive transaction throughput at minimum cost."
          svgURL={"/custom_data.png"}
        />
        <CardChainFeature
        className={styles.feature_card}
          title={"Decentralized Sequencers"}
          content="Variable shatters centralized chokepoints with decentralized sequencers, enabling lightning-fast transactions, and secure inter-blockchain communications."
          svgURL={"/Decentralized_Sequencers.png"}
        />
        <CardChainFeature
        className={styles.feature_card}
          title={"Ethereum Native"}
          content="Integrate EVM-compatible apps and chains on Variable with unparalleled security and seamless interoperability."
          svgURL={"/feature_4.svg"}
        />
        <CardChainFeature
        className={styles.feature_card}
          title={"Shared Revenue"}
          content="Variable incentivizes collaboration to foster ecosystem growth, bringing value to both platforms."
          svgURL={"/shared_revenue.png"}
        />
        <CardChainFeature
        className={styles.feature_card}
          title={"No Front Running"}
          content="Variable fosters a fair and competitive trading ecosystem with advanced anti-front-running measures, maintaining integrity and trust."
          svgURL={"/feature_6.svg"}
        />
      </div>
    </>
  );
};

export default ChainFeature;
