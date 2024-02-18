// components/ToggleSwitch.tsx

import { useState } from "react";
import styles from './ToggleSwitch.module.scss';
import { useLayout } from "./context/LayoutContext";

interface ToggleSwitchProps {
  label: string;
  onToggle?: (isChecked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onToggle }) => {
  const { changeLayout ,layout } = useLayout();
  const [isChecked, setChecked] = useState(layout);

  const handleToggle = () => {
    console.log("isChecked", isChecked);
    setChecked(!isChecked);
    changeLayout(!isChecked)
    // onToggle && onToggle(!isChecked);
  };

  return (
    <label
      htmlFor="Toggle4"
      className={`${styles.checkBox_container} transition-all duration-300 ${
        isChecked ? 'bg-[#1A1A1A] text-[#666666]' : ''
      }`}
    >
      <input
        id="Toggle4"
        type="checkbox"
        className={"hidden peer"}
        checked={isChecked}
        onChange={handleToggle}
      />
      <span
        className={` ${styles.checkBox_span} text-xs transition-all ml-1 duration-300 ${
          isChecked
            ? ' bg-[#1A1A1A] text-[#666666]'
            : 'rounded-full dark:bg-gray-800 text-white'
        } peer-checked:${isChecked ? 'bg-[#1A1A1A] text-[#666666]' : ''}`}
      >
        Chain
      </span>
      <span
        className={`${styles.checkBox_span} ${styles.checkBox_span_1} mr-1 text-xs transition-all duration-300 ${
          isChecked
            ? 'rounded-full dark:bg-gray-800 text-white'
            : ' bg-[#1A1A1A] text-[#666666]'
        } peer-checked:${isChecked ? '' : 'bg-[#1A1A1A] text-[#666666]'}`}
      >
        Dex
      </span>
    </label>
  );
};

export default ToggleSwitch;
