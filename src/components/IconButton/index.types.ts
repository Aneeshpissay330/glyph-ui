import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Circular button (default true) */
  rounded?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Icon element (required) */
  icon: React.ReactNode;
  /** Text/icon color in hex (default gray-700) */
  color?: string;
  /** Background color in hex (default transparent) */
  backgroundColor?: string;
  /** Extra classes */
  className?: string;
}
