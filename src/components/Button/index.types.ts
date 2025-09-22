import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  color?: string; // text color
  backgroundColor?: string; // button background
  hoverEffect?: boolean; // default true
  fullWidth?: boolean; // default false
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  loading?: boolean;
  loadingText?: string;
}