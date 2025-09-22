// Dialog.tailwind.tsx
// Single-file Tailwind-ready Dialog component (React + TypeScript)

import React from "react";
import type { DialogProps, DialogSize } from "./index.types";
import { X } from "lucide-react";

function sizeToClass(size?: DialogSize) {
  if (!size || size === "md") return "min-w-[18rem] max-w-2xl"; // default
  if (size === "sm") return "min-w-[16rem] max-w-md";
  if (size === "lg") return "min-w-[40rem] max-w-4xl";
  if (size === "full") return "w-full h-full rounded-none";
  if (typeof size === "number") return `min-w-[${size}px]`;
  return "min-w-[18rem] max-w-2xl";
}

/** Utility: find focusable elements inside a container */
function getFocusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  const selectors =
    'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
  return Array.from(container.querySelectorAll<HTMLElement>(selectors)).filter(
    (el) =>
      el.offsetWidth > 0 ||
      el.offsetHeight > 0 ||
      el.getAttribute("tabindex") !== null
  );
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  onOpen,
  title,
  children,
  footer,
  showCloseIcon = true,
  closeLabel = "Close dialog",
  disableClose = false,
  closeOnOverlayClick = true,
  className = "",
  size = "md",
  ariaLabel,
}) => {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const dialogRef = React.useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = React.useRef<HTMLElement | null>(null);
  const titleIdRef = React.useRef<string>(
    `dialog-title-${Math.random().toString(36).slice(2, 9)}`
  );

  React.useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      onOpen?.();

      // focus first focusable element or the dialog wrapper
      setTimeout(() => {
        const focusables = getFocusableElements(dialogRef.current);
        (focusables[0] || dialogRef.current)?.focus?.();
      }, 0);

      const onKeyDown = (e: KeyboardEvent) => {
        if (!open) return;
        if (e.key === "Escape" || e.key === "Esc") {
          if (!disableClose) {
            e.preventDefault();
            onClose();
          }
        } else if (e.key === "Tab") {
          // focus trap
          const focusables = getFocusableElements(dialogRef.current);
          if (focusables.length === 0) {
            e.preventDefault();
            dialogRef.current?.focus();
            return;
          }
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", onKeyDown);
      const origOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = origOverflow;
      };
    } else {
      // restore focus after close
      lastFocusedRef.current?.focus?.();
    }
  }, [open, onClose, onOpen, disableClose]);

  if (!open) return null;

  const overlayClick = (e: React.MouseEvent) => {
    if (!closeOnOverlayClick || disableClose) return;
    if (e.target === overlayRef.current) onClose();
  };

  const sizeClass = sizeToClass(size);

  return (
    // overlay
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/40 transition-opacity duration-200`}
      onMouseDown={overlayClick}
      aria-hidden={false}
    >
      {/* dialog container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleIdRef.current : undefined}
        aria-label={!title && ariaLabel ? ariaLabel : undefined}
        tabIndex={-1}
        className={`bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto transform-gpu transition-all duration-200 ease-out ${sizeClass} ${className}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1" id={title ? titleIdRef.current : undefined}>
            {typeof title === "string" ? (
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {title}
              </h2>
            ) : (
              title
            )}
          </div>

          {showCloseIcon && (
            <button
              onClick={() => {
                if (!disableClose) onClose();
              }}
              aria-label={closeLabel}
              title={closeLabel}
              disabled={disableClose}
              className={`inline-flex items-center justify-center h-9 w-9 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                disableClose
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <X className="w-5 h-5 text-white dark:text-slate-200" />
            </button>
          )}
        </div>

        {/* body */}
        <div className="text-sm text-slate-700 dark:text-slate-300">
          {children}
        </div>

        {/* footer */}
        {footer && <div className="mt-6 text-right">{footer}</div>}
      </div>
    </div>
  );
};

export default Dialog;
