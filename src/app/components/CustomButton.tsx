import React from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  text?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  onClick?: () => void;
  svg?: React.ReactNode;
  boxShadow?: string | boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = "Text",
  textColor = "black",
  bgColor = "white",
  borderColor = "gray-300",
  borderWidth = "1",
  boxShadow = false,
  onClick = () => {},
  svg,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: bgColor, // Set the background color explicitly
    color: textColor,
    boxShadow: boxShadow ? "2px 2px 46px 30px rgb(50 106 215 / 27%)" : "none",
  };

  return (
    <button
      style={buttonStyle}
      className={`flex items-center 
                px-4 py-2 md:px-6 md:py-4 xl:px-6 xl:py-2 
                xl:text-[20px] md:text-[14px] sm:text-[12px]
                rounded-full 
                text-${textColor} shadow-${boxShadow} border-${borderColor} border-${borderWidth} hover:bg-${bgColor}-dark 
                focus:outline-none focus:ring focus:border-blue-300
                ${styles.button}`}
      onClick={onClick}
    >
      {text}
      {svg && (
        <span className="ml-2 mt-0.25">
          <div dangerouslySetInnerHTML={{ __html: svg }} />
        </span>
      )}
    </button>
  );
};

export default CustomButton;
