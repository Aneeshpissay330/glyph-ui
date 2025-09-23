// index.types.ts
export interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

export interface CheckboxProps {
  name: string;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (values: string[]) => void;
  direction?: "row" | "column";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  error?: string;
  className?: string;
  selectedColor?: string;
  selectedTextColor?: string;
  selectedBorderColor?: string;  // NEW: border when checked
  unselectedTextColor?: string;
  showPills?: boolean;
  /** Color of the check / minus icon when checked */
  iconColor?: string;
  /** Color of the check / minus icon when unchecked (default = border color / inherit) */
  iconUncheckedColor?: string;
}
