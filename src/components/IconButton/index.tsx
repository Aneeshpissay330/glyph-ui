import * as React from "react";
import type { IconButtonProps } from "./index.types";

export const IconButton: React.FC<IconButtonProps> = ({
  rounded = true,
  size = "md",
  icon,
  color = "#374151", // gray-700
  backgroundColor = "transparent",
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const sizePx = size === "sm" ? 32 : size === "lg" ? 48 : 40;

  const style: React.CSSProperties = {
    width: sizePx,
    height: sizePx,
    borderRadius: rounded ? "50%" : "0.375rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    color: isHovered ? backgroundColor : color,
    backgroundColor: isHovered ? color : backgroundColor,
    border: "1px solid transparent",
  };

  return (
    <button
      type="button"
      {...props}
      style={style}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </button>
  );
};
