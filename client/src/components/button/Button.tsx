import type { ButtonProps } from "../../types/types";

export default function Button({
  text,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      type={type}
      className={className}
    >
      {text}
    </button>
  );
}
