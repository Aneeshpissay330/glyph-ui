// index.types.ts (unchanged except exported for convenience)
export type TextAreaVariant = "contained" | "outlined" | "underlined";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariant;
  fullWidth?: boolean;
  rounded?: boolean;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverEffect?: boolean;
  error?: string;
}