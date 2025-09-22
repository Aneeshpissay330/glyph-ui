import * as React from "react";
import type { ButtonProps } from "./index.types";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

// Tailwind + small inline-style usage for dynamic hex colors
export const Button = ({
  children,
  leftIcon,
  rightIcon,
  style,
  color = "#ffffff",
  backgroundColor = "#000000",
  hoverEffect = true,
  rounded = true,
  fullWidth = false,
  size = "md",
  variant,
  loading = false,
  loadingText,
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Variants handling
  let bg = backgroundColor;
  let txt = color;
  let border = backgroundColor;

  // Variants handling (default state)
  if (variant === "outline") {
    bg = "transparent";
    txt = backgroundColor;
    border = backgroundColor;
  } else if (variant === "ghost") {
    bg = "transparent";
    txt = backgroundColor;
    border = "transparent";
  } else {
    // solid or no variant
    bg = backgroundColor;
    txt = color;
    border = backgroundColor;
  }

  // Hover state
  if (isHovered && hoverEffect) {
    if (variant === "outline") {
      bg = backgroundColor;
      txt = color;
    } else {
      // solid or no variant → invert colors
      bg = color;
      txt = backgroundColor;
    }
  }

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: bg,
    color: txt,
    borderColor: border,
    ...style,
  };

  const baseClasses = [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "font-medium",
    "transition-all",
    "duration-300",
    "cursor-pointer",
    "border-2",
    sizeClasses[size],
    rounded ? "rounded-full" : "!rounded-none",
    fullWidth ? "w-full" : "w-auto",
    props.disabled || loading ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      className={baseClasses}
      style={dynamicStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={props.disabled || loading}
    >
      {leftIcon && !loading && (
        <span className="flex items-center">{leftIcon}</span>
      )}
      <span className="flex items-center">
        {loading ? loadingText || "Loading..." : children}
      </span>
      {rightIcon && !loading && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
}
