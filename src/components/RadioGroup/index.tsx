import * as React from "react";
import { Circle, CircleDot } from "lucide-react";
import type { RadioGroupProps } from "./index.types";

const sizeClasses: Record<NonNullable<RadioGroupProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  direction = "row",
  size = "md",
  fullWidth = false,
  error,
  className = "",
  selectedColor = "#0f1724",       // default dark navy
  selectedTextColor = "#ffffff",   // default label/icon color when selected
  unselectedTextColor = "#0f1724", // unselected label text color
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div
        className={`flex ${direction === "row" ? "flex-row gap-4 flex-wrap" : "flex-col gap-2"}`}
        role="radiogroup"
        aria-label={name}
      >
        {options.map((opt, idx) => {
          const selected = value === opt.value;

          const base =
            "inline-flex items-center gap-3 rounded-full border transition " +
            sizeClasses[size] +
            " disabled:opacity-50 disabled:cursor-not-allowed";

          // inline styles applied when selected OR not selected (for easier hex control)
          const selectedInlineStyle: React.CSSProperties = selected
            ? {
                backgroundColor: selectedColor,
                borderColor: selectedColor,
                color: selectedTextColor, // label + icon inherit via text color
              }
            : {
                backgroundColor: "#ffffff",
                borderColor: "#d1d5db",
                color: unselectedTextColor,
              };

          // ensure icon inherits label color (stroke-current)
          const iconClass = "h-4 w-4 stroke-current";

          return (
            <label
              key={`${opt.value}-${idx}`}
              role="radio"
              aria-checked={selected}
              aria-disabled={opt.disabled || undefined}
              // remove browser focus box by avoiding focus:ring utilities and using outline-none on the input
              className={`${base} ${fullWidth ? "w-full justify-between" : "justify-center cursor-pointer"}`}
              style={selectedInlineStyle}
            >
              <input
                // keep the native input for a11y but visually hidden
                type="radio"
                name={name}
                value={opt.value}
                checked={selected}
                onChange={(e) => onChange(e.target.value)}
                disabled={opt.disabled}
                className="sr-only outline-none focus:outline-none"
              />

              {/* lucide icons - stroke-current will use the label color from selectedInlineStyle */}
              {selected ? (
                <CircleDot aria-hidden className={iconClass} />
              ) : (
                <Circle aria-hidden className={iconClass} />
              )}

              <span style={{ color: selected ? selectedTextColor : unselectedTextColor }}>
                {opt.label}
              </span>
            </label>
          );
        })}
      </div>

      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};
