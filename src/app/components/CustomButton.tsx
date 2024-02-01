// components/CustomButton.tsx

import React from 'react';

interface CustomButtonProps {
  text?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?:string;
  borderWidth?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = 'Text',
  textColor = 'black',
  bgColor = 'blue-500',
  borderColor = 'gray-300',
  borderWidth = '1',
  onClick = () => {},
}) => {
  return (
    <button
      className={`px-6 py-2 rounded-full text-${textColor} border-${borderColor} border-${borderWidth} bg-${bgColor} hover:bg-${bgColor}-dark focus:outline-none focus:ring focus:border-blue-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
