
export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  direction?: "row" | "column";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  error?: string;
  className?: string;
  /**
   * Hex or CSS color for the selected pill background & border.
   * Example: "#0f1724"
   */
  selectedColor?: string;
  /**
   * Optional color for the icon & label when selected (falls back to white).
   */
  selectedTextColor?: string;
  /**
   * Color for the unselected label text (default: #0f1724).
   */
  unselectedTextColor?: string;
}