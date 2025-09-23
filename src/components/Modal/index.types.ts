import * as React from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  /** Hex or any valid CSS color string */
  backgroundColor?: string;
  /** width as CSS value (e.g. '400px' or 'min(90%,640px)') */
  width?: string | number;
  borderRadius?: string | number;
  style?: React.CSSProperties;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}
