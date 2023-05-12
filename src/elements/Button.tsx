import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
}) => {
  const baseStyle =
    "h-8 inline-flex transition-all duration-300 items-center justify-center p-3 text-xs font-medium text-white/90 border border-transparent rounded-lg shadow-sm";
  const enabledStyle =
    "bg-black/30 hover:bg-black/70 focus:outline-none";
  const disabledStyle = "bg-gray-300 cursor-not-allowed";

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      className={`${baseStyle} ${disabled ? disabledStyle : enabledStyle
        } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
