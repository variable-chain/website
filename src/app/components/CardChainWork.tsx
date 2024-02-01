import React from 'react';
import styles from './CardChainWork.module.scss'; // Import the SCSS module

interface CardProps {
  svg: React.ReactElement;
  title: string;
  content: string;
}

const CardChainWork: React.FC<CardProps> = ({ svg, title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-svg']} dangerouslySetInnerHTML={{ __html: svg }} />
      {/* <div >{svg}</div> */}
      <div className={styles['card-content']}>
        <h2 className={styles['card-title']}>{title}</h2>
        <p className={styles['card-text']}>{content}</p>
      </div>
    </div>
  );
};

export default CardChainWork;
