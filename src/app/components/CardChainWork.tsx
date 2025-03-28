import React, { useEffect, useRef, useState } from "react";
import styles from "./CardChainWork.module.scss"; // Import the SCSS module
import { motion, useAnimation } from "framer-motion";
import { Meteors } from "./ui/meteors";

interface CardProps {
  svg: React.ReactElement;
  title: string;
  content: string;
}

const CardChainWork: React.FC<CardProps> = ({ svg, title, content }) => {
  const contentArray: string[] = JSON.parse(content);
  const [animationVariant, setAnimationVariant] = useState<"initial" | "zoomed">("initial");

  useEffect(() => {
    const animate = () => {
      setAnimationVariant((prevVariant) => (prevVariant === 'initial' ? 'zoomed' : 'initial'));
    };

    // Start the animation immediately
    const intervalId = setInterval(animate, 5000); // 5000 milliseconds (5 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    zoomed: {
      scale: 1.2,
      rotate: 360,
    },
  };


  return (
  //   <div className="">
  //     <div className=" w-full relative">
  //       <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
  //       <div className="relative shadow-xl bg-[#161616] border border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

  //  <div className={styles.card}>
  //  <motion.div
  //       variants={variants}
  //       animate={animationVariant}
  //       transition={{ duration: .5 }}
  //       className={styles["card-svg"]}
  //       dangerouslySetInnerHTML={{ __html: svg }}
  //     />
  //     <div className={styles["card-content"]}>
  //       <h2 className={styles["card-title"]}>{title}</h2>
  //       <ul className={styles.card_list}>
  //         {contentArray.map((item, index) => (
  //           <li key={index} className={styles.card_list_item}>
  //             <div className={styles.card_list_item_svg}>
  //               <svg
  //                 width="25"
  //                 height="24"
  //                 viewBox="0 0 25 24"
  //                 fill="none"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   d="M12.6563 2C10.6476 2 8.68393 2.57182 7.01374 3.64317C5.34356 4.71451 4.04181 6.23726 3.2731 8.01884C2.5044 9.80043 2.30327 11.7608 2.69515 13.6521C3.08704 15.5434 4.05432 17.2808 5.4747 18.6443C6.89508 20.0078 8.70475 20.9364 10.6749 21.3127C12.645 21.6889 14.6871 21.4958 16.5429 20.7579C18.3987 20.0198 19.9849 18.7702 21.1009 17.1668C22.2169 15.5634 22.8126 13.6784 22.8126 11.75C22.8097 9.16498 21.7388 6.68661 19.8347 4.85873C17.9307 3.03084 15.349 2.00273 12.6563 2ZM18.4327 10.189L13.9258 12.0425L17.1612 15.77C17.2938 15.9229 17.3577 16.1201 17.3388 16.3183C17.32 16.5164 17.2199 16.6993 17.0606 16.8266C16.9013 16.9539 16.6959 17.0152 16.4895 16.9971C16.2831 16.979 16.0926 16.8829 15.96 16.73L12.6563 12.9219L9.35059 16.73C9.21798 16.8829 9.02753 16.979 8.82113 16.9971C8.61473 17.0152 8.40929 16.9539 8.25 16.8266C8.09072 16.6993 7.99064 16.5164 7.97177 16.3183C7.95291 16.1201 8.01681 15.9229 8.14942 15.77L11.3868 12.0425L6.87989 10.189C6.78265 10.1523 6.69409 10.0971 6.61946 10.0268C6.54484 9.95662 6.48565 9.87262 6.44541 9.78008C6.40518 9.68744 6.3847 9.58808 6.38521 9.48766C6.38572 9.38734 6.4072 9.28813 6.44837 9.1959C6.48955 9.10367 6.54958 9.02031 6.62492 8.95075C6.70025 8.8812 6.78936 8.82687 6.88697 8.79097C6.98458 8.75508 7.08869 8.73835 7.19315 8.74178C7.29762 8.74521 7.4003 8.76872 7.49512 8.81094L11.8751 10.6128V6.3125C11.8751 6.11359 11.9574 5.92282 12.1039 5.78217C12.2504 5.64152 12.4491 5.5625 12.6563 5.5625C12.8635 5.5625 13.0622 5.64152 13.2087 5.78217C13.3552 5.92282 13.4376 6.11359 13.4376 6.3125V10.6128L17.8174 8.81094C17.9123 8.76872 18.0149 8.74521 18.1194 8.74178C18.2239 8.73835 18.328 8.75508 18.4256 8.79097C18.5232 8.82687 18.6123 8.8812 18.6876 8.95075C18.763 9.02031 18.823 9.10367 18.8642 9.1959C18.9054 9.28813 18.9268 9.38734 18.9273 9.48766C18.9279 9.58808 18.9074 9.68744 18.8671 9.78008C18.8269 9.87262 18.7677 9.95662 18.6931 10.0268C18.6185 10.0971 18.5299 10.1523 18.4327 10.189Z"
  //                   fill="#3B62EC"
  //                 />
  //               </svg>
  //             </div>
  //             <span className={styles["card-text"]}>{item}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  //         <Meteors number={20} />
  //       </div>
  //     </div>
  //   </div>
    <div className={styles.card}>
      <motion.div
        variants={variants}
        animate={animationVariant}
        transition={{ duration: .5 }}
        className={styles["card-svg"]}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className={styles["card-content"]}>
        <h2 className={styles["card-title"]}>{title}</h2>
        <ul className={styles.card_list}>
          {contentArray.map((item, index) => (
            <li key={index} className={styles.card_list_item}>
              <div className={styles.card_list_item_svg}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6563 2C10.6476 2 8.68393 2.57182 7.01374 3.64317C5.34356 4.71451 4.04181 6.23726 3.2731 8.01884C2.5044 9.80043 2.30327 11.7608 2.69515 13.6521C3.08704 15.5434 4.05432 17.2808 5.4747 18.6443C6.89508 20.0078 8.70475 20.9364 10.6749 21.3127C12.645 21.6889 14.6871 21.4958 16.5429 20.7579C18.3987 20.0198 19.9849 18.7702 21.1009 17.1668C22.2169 15.5634 22.8126 13.6784 22.8126 11.75C22.8097 9.16498 21.7388 6.68661 19.8347 4.85873C17.9307 3.03084 15.349 2.00273 12.6563 2ZM18.4327 10.189L13.9258 12.0425L17.1612 15.77C17.2938 15.9229 17.3577 16.1201 17.3388 16.3183C17.32 16.5164 17.2199 16.6993 17.0606 16.8266C16.9013 16.9539 16.6959 17.0152 16.4895 16.9971C16.2831 16.979 16.0926 16.8829 15.96 16.73L12.6563 12.9219L9.35059 16.73C9.21798 16.8829 9.02753 16.979 8.82113 16.9971C8.61473 17.0152 8.40929 16.9539 8.25 16.8266C8.09072 16.6993 7.99064 16.5164 7.97177 16.3183C7.95291 16.1201 8.01681 15.9229 8.14942 15.77L11.3868 12.0425L6.87989 10.189C6.78265 10.1523 6.69409 10.0971 6.61946 10.0268C6.54484 9.95662 6.48565 9.87262 6.44541 9.78008C6.40518 9.68744 6.3847 9.58808 6.38521 9.48766C6.38572 9.38734 6.4072 9.28813 6.44837 9.1959C6.48955 9.10367 6.54958 9.02031 6.62492 8.95075C6.70025 8.8812 6.78936 8.82687 6.88697 8.79097C6.98458 8.75508 7.08869 8.73835 7.19315 8.74178C7.29762 8.74521 7.4003 8.76872 7.49512 8.81094L11.8751 10.6128V6.3125C11.8751 6.11359 11.9574 5.92282 12.1039 5.78217C12.2504 5.64152 12.4491 5.5625 12.6563 5.5625C12.8635 5.5625 13.0622 5.64152 13.2087 5.78217C13.3552 5.92282 13.4376 6.11359 13.4376 6.3125V10.6128L17.8174 8.81094C17.9123 8.76872 18.0149 8.74521 18.1194 8.74178C18.2239 8.73835 18.328 8.75508 18.4256 8.79097C18.5232 8.82687 18.6123 8.8812 18.6876 8.95075C18.763 9.02031 18.823 9.10367 18.8642 9.1959C18.9054 9.28813 18.9268 9.38734 18.9273 9.48766C18.9279 9.58808 18.9074 9.68744 18.8671 9.78008C18.8269 9.87262 18.7677 9.95662 18.6931 10.0268C18.6185 10.0971 18.5299 10.1523 18.4327 10.189Z"
                    fill="#3B62EC"
                  />
                </svg>
              </div>
              <span className={styles["card-text"]}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardChainWork;
