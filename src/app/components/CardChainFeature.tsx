import React from 'react';
import styles from './CardChainFeature.module.scss'; // Import the SCSS module
import Image from 'next/image';

interface CardProps {
  className?: string
  svgURL: string;
  title: string;
  content?: string;
}

const CardChainFeature: React.FC<CardProps> = ({ className, svgURL, title, content }) => {
  return (
    <div className={`card-chain-feature ${className}`}>
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={svgURL} alt={svgURL}  width={374} height={300}/>
      </div>
      {/* <div >{svg}</div> */}
      <div className={styles['card-content']}>
        <h2 className={styles['card-title']}>{title}</h2>
        <p className={styles['card-text']}>{content}</p>
      </div>
    </div>
    </div>
  );
};

export default CardChainFeature;
