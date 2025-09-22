import * as React from "react";

export type TextInputVariant = "contained" | "outlined" | "underlined";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: TextInputVariant;
  fullWidth?: boolean;
  rounded?: boolean;
  color?: string; // text color
  backgroundColor?: string; // for contained variant
  borderColor?: string; // for outlined/underlined default
  focusedBorderColor?: string; // 🔥 new: focused border color
  hoverEffect?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}