// components/CustomButton.tsx

import React from "react";

interface CustomButtonProps {
  text?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  onClick?: () => void;
  svg?: React.ReactNode;
  boxShadow?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = "Text",
  textColor = "black",
  bgColor = "white",
  borderColor = "gray-300",
  borderWidth = "1",
  boxShadow = "none",
  onClick = () => {},
  svg,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: bgColor, // Set the background color explicitly
    color: textColor,
  };

  return (
    <button
      style={buttonStyle}
      className={`flex items-center 
                px-4 py-2 md:px-6 md:py-4 xl:px-6 xl:py-2 
                sm:text-[14px] xl:text-[20px]
                rounded-full 
                text-${textColor} shadow-${boxShadow} border-${borderColor} border-${borderWidth} hover:bg-${bgColor}-dark 
                focus:outline-none focus:ring focus:border-blue-300`}
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
