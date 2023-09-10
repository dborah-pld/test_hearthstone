import { ReactElement } from "react";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  title: string;
  bgColor: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  onClick,
  disabled,
  title,
  bgColor,
  type,
}: Props): ReactElement {
  return (
    <button
      type={type}
      className={`p-1 bg-hs-beige shadow-md rounded-md ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } `}
      disabled={disabled}
    >
      <div
        className={`p-2 belweBold ${bgColor} rounded-md shadow-xl ring-1 ring-yellow-600 transition-all ${
          disabled ? "opacity-30" : "hover:brightness-110"
        }`}
        onClick={onClick}
      >
        <p className="text-white uppercase text-sm mx-3">{title}</p>
      </div>
    </button>
  );
}
