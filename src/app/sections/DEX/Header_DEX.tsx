import React from 'react';
import Image from 'next/image';
import styles from './Header_DEX.module.scss';
import CustomButton from '@/app/components/CustomButton';
import Link from 'next/link';

const Header_DEX: React.FC = () => {
    return (
      <header className={styles.header}>
        <div className={styles.header_container}>
        <div className={styles.header_left}>
          <h1 className={styles.header_heading}>Trade Perpetuals,  Collect SBTs &  Earn Revenue</h1>
          <span className={styles.header_subHeading}>A Perpetual DEX, offering lightning-fast trades and equipped with powerful features for unparalleled efficiency and high-performing precision trades.</span>
          <div className={styles.header_btn}>
          <a href="https://discord.gg/zy2etpswhE" className={styles.social_list_item_link} target="_blank">
          <CustomButton
              text="Join Discord"
              textColor="white"
              bgColor="#3B62EC"
              svg='<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_491_4378)"> <g filter="url(#filter0_d_491_4378)"> <path d="M13.3689 3.55819C12.4563 3.14077 11.487 2.83655 10.4753 2.66675C10.3479 2.88607 10.2064 3.18322 10.1073 3.41669C9.03127 3.26104 7.96293 3.26104 6.9017 3.41669C6.80265 3.18322 6.65407 2.88607 6.53379 2.66675C5.51501 2.83655 4.54574 3.14077 3.63943 3.55819C1.80702 6.26082 1.31177 8.89975 1.5594 11.5033C2.77629 12.3877 3.95075 12.9254 5.10467 13.2792C5.38767 12.8971 5.64237 12.4867 5.8617 12.0552C5.44427 11.8995 5.04807 11.7085 4.66603 11.4821C4.76508 11.4114 4.86413 11.3336 4.95611 11.2557C7.26253 12.3099 9.76073 12.3099 12.0388 11.2557C12.1379 11.3336 12.2299 11.4114 12.3289 11.4821C11.9469 11.7085 11.5507 11.8995 11.1333 12.0552C11.3526 12.4867 11.6073 12.8971 11.8903 13.2792C13.0435 12.9254 14.225 12.3877 15.4355 11.5033C15.7397 8.48948 14.9537 5.87173 13.3689 3.55819ZM6.18007 9.89735C5.48671 9.89735 4.92071 9.26768 4.92071 8.49655C4.92071 7.72535 5.47256 7.09568 6.18007 7.09568C6.88047 7.09568 7.45353 7.72535 7.4394 8.49655C7.4394 9.26768 6.88047 9.89735 6.18007 9.89735ZM10.8291 9.89735C10.1357 9.89735 9.56893 9.26768 9.56893 8.49655C9.56893 7.72535 10.1215 7.09568 10.8291 7.09568C11.5295 7.09568 12.1025 7.72535 12.0883 8.49655C12.0883 9.26768 11.5365 9.89735 10.8291 9.89735Z" fill="white"/> </g> </g> <defs> <filter id="filter0_d_491_4378" x="-0.5" y="1.66675" width="18" height="14.6125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="1"/> <feGaussianBlur stdDeviation="1"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_491_4378"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_491_4378" result="shape"/> </filter> <clipPath id="clip0_491_4378"> <rect width="16" height="16" fill="white" transform="translate(0.5)"/> </clipPath> </defs> </svg>'
              boxShadow={"[2px 2px 4px rgba(0, 0, 0, 0.1)]"}
            />
            </a>
          </div>
        </div>
        <div className={styles.header_right}>
        <Image src={"/Variable_mockup.svg"} alt="Variable mockup" height={853} width={1175}/>
        </div>
        </div>
      </header>
        // <header className="bg-gradient-to-r from-gray-700 via-gray-600 to-white text-white p-8">
        //   <div className="grid grid-cols-2 gap-8">
        //     {/* First Grid */}
        //     <div className="flex flex-col justify-center">
        //       <h1 className="text-6xl font-bold mb-4 text-opacity-90">Trade Perpetuals Collect SBTs & Earn Revenue</h1>
        //       <p className="text-lg mb-6 text-opacity-70">
        //         Advanced Layer 3 Derivatives DEX, operating as a Validium AppChain on StarkNet's Layer 2 scaling solution.
        //       </p>
        //       <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        //         Join Discord
        //       </button>
        //     </div>
    
        //     {/* Second Grid */}
        //     <div>
        //       {/* Replace 'your-image-path' with the actual path to your image */}
        //       {/* <Image src="/your-image-path" alt="Image Alt Text" className="rounded-md" /> */}
        //     </div>
        //   </div>
        // </header>
      );
    };

export default Header_DEX;
