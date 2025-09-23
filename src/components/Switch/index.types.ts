// Switch/index.types.ts
export interface SwitchProps {
  /** html name attribute (used to build id) */
  name: string;
  /** controlled checked value */
  checked?: boolean;
  /** onChange handler receives next boolean */
  onChange?: (next: boolean) => void;
  /** optional label to show next to the switch */
  label?: string;
  /** size variants */
  size?: "sm" | "md" | "lg";
  /** disabled state */
  disabled?: boolean;
  /** full width layout (label and control spaced) */
  fullWidth?: boolean;
  /** custom track color when checked (hex or css color) */
  selectedColor?: string;
  /** track color when unchecked */
  unselectedColor?: string;
  /** knob color */
  knobColor?: string;
  /** additional wrapper class */
  className?: string;
  /** error text shown under the control */
  error?: string;
}
