"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../utils/3d-card";
import Link from "next/link";

interface CardProps {
  className?: string;
  svgURL: string;
  title: string;
  content?: string;
}

const CardChainFeature: React.FC<CardProps> = ({
  className,
  svgURL,
  title,
  content,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#161616] border-white/[0.2] max-w-sm max-h-sm rounded-3xl  ">
        <CardItem translateZ="100" className="w-full p-4">
          <Image
            src={svgURL}
            height="300"
            width="374"
            className="rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-[16px] px-4 font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#4f4f4f] px-4 mb-5 text-sm max-w-sm mt-2 "
        >
          {content}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

// import React from 'react';
// import styles from './CardChainFeature.module.scss'; // Import the SCSS module
// import Image from 'next/image';

// const CardChainFeature: React.FC<CardProps> = ({ className, svgURL, title, content }) => {
//   return (
//     <div className={`card-chain-feature ${className}`}>
//     <div className={styles.card}>
//       <div className={styles.card_image}>
//         <Image src={svgURL} alt={svgURL}  width={374} height={300}/>
//       </div>
//       {/* <div >{svg}</div> */}
//       <div className={styles['card-content']}>
//         <h2 className={styles['card-title']}>{title}</h2>
//         <p className={styles['card-text']}>{content}</p>
//       </div>
//     </div>
//     </div>
//   );
// };

export default CardChainFeature;
