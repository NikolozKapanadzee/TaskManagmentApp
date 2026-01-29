import type { InputProps } from "../../types/types";

export default function Input({
  type = "text",
  className = "",
  placeholder = "",
  label,
  error,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-black">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} ${error ? "border-red-500 focus:ring-red-500" : ""}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
