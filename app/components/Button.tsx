import React from "react";
import { IconType } from "react-icons";
type buttonType = {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  Icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<buttonType> = ({
  label,
  disabled,
  outline,
  small,
  Icon,
  custom,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 ${
        outline ? "bg-white text-slate-700" : "bg-slate-700 text-white"
      } ${
        small
          ? "text-sm font-light py-1 px-2 border-[1px]"
          : "text-md py-3 px-4 border-2"
      } ${custom && custom}`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
