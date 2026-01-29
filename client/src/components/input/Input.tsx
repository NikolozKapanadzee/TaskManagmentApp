import type { InputProps } from "../../types/types";

export default function Input({
  type = "text",
  className = "",
  placeholder = "",
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
