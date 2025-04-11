import "./TabButton.css";
import * as React from "react";

interface TabButtonProps {
  children?: React.ReactNode;
  onSelect?: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
}

function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
