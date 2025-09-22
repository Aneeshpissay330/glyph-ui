// index.tsx (Tailwind version)
import * as React from "react";
import type { TextInputProps } from "./index.types";
import { hexToAlpha } from "../../utils/color";

export const TextInput: React.FC<TextInputProps> = ({
  variant = "outlined",
  fullWidth = true,
  rounded = true,
  color = "#000",
  backgroundColor = "#f3f4f6",
  borderColor = "#d1d5db",
  focusedBorderColor = "#000",
  leftIcon,
  rightIcon,
  error,
  className = "",
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  // compute classes that are static (Tailwind) and styles that are dynamic (colors)
  const baseWrapperCls = "inline-flex flex-col w-full";
  const containerCls = "relative flex items-center";
  const inputBaseCls =
    "flex-1 text-base outline-none transition-all duration-150 ease-in-out placeholder:text-slate-400";

  const widthCls = fullWidth ? "w-full" : "w-auto";
  const roundedCls = rounded ? "rounded-full" : "rounded-none";

  // variant classes
  const variantCls =
    variant === "contained"
      ? "px-4 py-3"
      : variant === "underlined"
      ? "px-0 py-2 border-b rounded-none focus:outline-none focus:border-sky-600"
      : "px-4 py-3";

  // border handling
  const borderCls =
    variant === "outlined"
      ? "border rounded-md"
      : variant === "underlined"
      ? "border-b"
      : "border-0";

  // focus ring / shadow style (inline because color is dynamic)
  const focusStyle: React.CSSProperties = isFocused
    ? variant === "underlined"
      ? { boxShadow: "none" }
      : { boxShadow: `0 0 0 3px ${hexToAlpha(focusedBorderColor, 0.12)}` }
    : {};

  // borderColor style (changes on focus)
  const appliedBorderColor = isFocused ? focusedBorderColor : borderColor;

  return (
    <div className={`${baseWrapperCls} ${className}`} style={style}>
      <div className={`${containerCls} ${widthCls}`}>
        {leftIcon && (
          <span className="absolute left-4 flex items-center pointer-events-none">
            {leftIcon}
          </span>
        )}

        <input
          {...props}
          className={`${inputBaseCls} ${variantCls} ${borderCls} ${roundedCls} ${
            leftIcon ? "pl-12" : "pl-4"
          } ${rightIcon ? "pr-12" : "pr-4"} text-[inherit]`}
          style={{
            color,
            backgroundColor:
              variant === "contained" ? backgroundColor : "transparent",
            borderColor:
              variant === "outlined" || variant === "underlined"
                ? appliedBorderColor
                : undefined,
            ...focusStyle,
          }}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
        />

        {rightIcon && (
          <span className="absolute right-4 flex items-center">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <span
          className="mt-1 text-sm text-red-600"
          role="status"
          aria-live="polite"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
