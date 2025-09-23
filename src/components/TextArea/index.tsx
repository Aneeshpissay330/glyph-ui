// index.tsx
import * as React from "react";
import type { TextAreaProps } from "./index.types";

export const TextArea: React.FC<TextAreaProps> = ({
  variant = "outlined",
  fullWidth = false,
  rounded = true,
  color = "#000",
  backgroundColor = "#fff",
  borderColor = "#ccc",
  hoverEffect = true,
  error,
  style,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const dynamicStyle: React.CSSProperties = {
    color,
    backgroundColor: variant === "contained" ? backgroundColor : undefined,
    ...style,
  };

  const baseClasses = [
    fullWidth ? "w-full" : "inline-flex",
    "relative",
    "flex-col",
  ]
    .filter(Boolean)
    .join(" ");

  const textareaClasses = [
    "w-full",
    "min-h-[80px]",
    "resize-y",
    "transition-all",
    "duration-150",
    "ease-in-out",
    "outline-none",
    rounded && variant !== "underlined" ? "rounded-md" : "",
    "py-2",
    "pl-3", // ✅ add left padding for text & placeholder
    "text-base",
  ]
    .filter(Boolean)
    .join(" ");

  const borderStyles: React.CSSProperties = {};
  if (variant === "outlined") {
    borderStyles.borderWidth = 1;
    borderStyles.borderStyle = "solid";
    borderStyles.borderColor = isHovered && hoverEffect ? color : borderColor;
  } else if (variant === "underlined") {
    borderStyles.border = "none";
    borderStyles.borderBottomWidth = 2;
    borderStyles.borderBottomStyle = "solid";
    borderStyles.borderBottomColor =
      isHovered && hoverEffect ? color : borderColor;
    borderStyles.borderRadius = 0; // flat like MUI
  }

  return (
    <div
      className={baseClasses}
      style={{ width: fullWidth ? "100%" : undefined }}
    >
      <div className="relative w-full flex items-center">
        <textarea
          {...props}
          className={[textareaClasses, className].filter(Boolean).join(" ")}
          style={{ ...dynamicStyle, ...borderStyles }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};
