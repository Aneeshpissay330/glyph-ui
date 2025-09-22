// Dialog.types.ts
import * as React from "react";

export type DialogSize = "sm" | "md" | "lg" | "full" | number;

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  onOpen?: () => void;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: string | number;
  showCloseIcon?: boolean;
  closeLabel?: string; // accessible label for close button
  disableClose?: boolean; // if true, close icon, ESC and overlay click won't close
  closeOnOverlayClick?: boolean; // default true
  style?: React.CSSProperties;
  className?: string;
  size?: DialogSize;
  ariaLabel?: string; // optional aria-label if title isn't provided
}
