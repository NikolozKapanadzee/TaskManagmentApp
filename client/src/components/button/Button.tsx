import type { ButtonProps } from "../../types/types";

export default function Button({
  className = "",
  type = "button",
  onClick,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}
