// ...existing code...
import React, { useEffect } from "react";
import type { ModalProps } from "./index.types";

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  backgroundColor = "#ffffff",
  width = "400px",
  borderRadius = "0.5rem",
  style,
  ariaLabel = "Modal dialog",
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const inlineStyles: React.CSSProperties = {
    backgroundColor,
    width,
    borderRadius,
    ...style,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label={ariaLabel}
        aria-modal="true"
        className="max-w-[90%] shadow-2xl p-6 border border-gray-200 ring-1 ring-black/5"
        style={inlineStyles}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};