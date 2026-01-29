import { forwardRef } from "react";
import type { InputProps } from "../../types/types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", className = "", placeholder = "", label, error, ...rest },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-black">
            {label}
          </label>
        )}
        <input
          ref={ref}
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
  },
);

Input.displayName = "Input";

export default Input;
