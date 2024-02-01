import React from "react";
import styles from "./ChainWork.module.scss";
import CardChainWork from "../components/CardChainWork";

const ChainWork: React.FC = () => {
  const MySvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Your SVG path here */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
  return (
    <div className="container mx-auto">
      <div className={styles.workContainer}>
        <CardChainWork
          svg='<svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 50C0.5 22.3858 22.8858 0 50.5 0C78.1142 0 100.5 22.3858 100.5 50C100.5 77.6142 78.1142 100 50.5 100C22.8858 100 0.5 77.6142 0.5 50Z" fill="#131313"/>
          <path d="M36.2313 30.455C39.0058 29.4687 42.2228 30.0858 44.4435 32.3065C46.6648 34.5278 47.2817 37.746 46.2941 40.521L70.6947 64.9219L65.9218 69.6948L41.5187 45.2949C38.7442 46.2813 35.5272 45.6641 33.3065 43.4435C31.0852 41.2222 30.4683 38.004 31.4559 35.229L36.4885 40.2615C37.8065 41.5795 39.9435 41.5795 41.2615 40.2615C42.5795 38.9435 42.5795 36.8065 41.2615 35.4885L36.2313 30.455ZM59.5579 34.693L66.7174 30.7155L69.8994 33.8975L65.9218 41.057L61.9443 41.8525L57.1713 46.6255L53.9894 43.4435L58.7623 38.6705L59.5579 34.693ZM43.648 52.1938L48.4209 56.967L37.284 68.1038C35.966 69.4219 33.8291 69.4219 32.511 68.1038C31.2706 66.8634 31.1976 64.8973 32.2921 63.5716L32.511 63.3309L43.648 52.1938Z" fill="#3B62EC"/>
          </svg>
          '
          title="Build"
          content="Seamlessly integrate our plug-and-play modules or harness the potential of our SDK to built custom ZK enriched trading apps. "
        />
        <CardChainWork
          svg='<svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 50C0.5 22.3858 22.8858 0 50.5 0C78.1142 0 100.5 22.3858 100.5 50C100.5 77.6142 78.1142 100 50.5 100C22.8858 100 0.5 77.6142 0.5 50Z" fill="#131313"/>
          <g clip-path="url(#clip0_36_352)">
          <path d="M38.4884 58.3889L49.2179 64.5836C46.812 66.4207 43.758 67.239 40.7559 66.851C38.9188 64.4451 38.1005 61.3911 38.4884 58.3889ZM57.6403 58.8341L58.698 64.0781L56.9936 67.0302L32.4818 52.8784L34.1862 49.9262L39.2565 48.2202L44.3907 39.3275C47.4716 33.9913 53.9293 31.6666 60.2559 33.076C64.6397 37.8503 65.8554 44.6051 62.7745 49.9414L57.6403 58.8341ZM51.8136 47.6984C53.5058 48.6754 55.6696 48.0957 56.6466 46.4035C57.6235 44.7113 57.0438 42.5475 55.3516 41.5705C53.6593 40.5935 51.4956 41.1733 50.5186 42.8655C49.5416 44.5577 50.1214 46.7214 51.8136 47.6984Z" fill="#1D7AFC"/>
          </g>
          <defs>
          <clipPath id="clip0_36_352">
          <rect width="39.69" height="39.69" fill="white" transform="translate(43.5812 22.7363) rotate(30)"/>
          </clipPath>
          </defs>
          </svg>
          '
          title="Launch"
          content="Take your app live in minutes and get benefited from instant transaction finality, zero gas fees, and our rapidly growing user base."
        />
        <CardChainWork
          svg='<svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 50C0.5 22.3858 22.8858 0 50.5 0C78.1142 0 100.5 22.3858 100.5 50C100.5 77.6142 78.1142 100 50.5 100C22.8858 100 0.5 77.6142 0.5 50Z" fill="#131313"/>
          <path d="M37.8493 51.7651L41.6445 55.5602L44.1747 53.0301L40.3795 49.235L44.1747 45.4398L49.235 50.5L51.7651 47.9699L46.7048 42.9096L50.5001 39.1144L54.2952 42.9096L56.8253 40.3795L53.0302 36.5843L58.0904 31.524C58.789 30.8253 59.9219 30.8253 60.6205 31.524L69.4761 40.3795C70.1747 41.0782 70.1747 42.2109 69.4761 42.9096L42.9096 69.476C42.211 70.1747 41.0782 70.1747 40.3795 69.476L31.524 60.6206C30.8253 59.9218 30.8253 58.7892 31.524 58.0905L37.8493 51.7651Z" fill="#3B62EC"/>
          </svg>'
          title="Scale"
          content="“We grow as you evolve.” Variable infrastructure ensures that your trading operations can expand seamlessly to capitalize on new opportunities."
        />
      </div>
    </div>
  );
};

export default ChainWork;
