// Checkbox/index.tsx
import * as React from "react";
import { Check, Minus } from "lucide-react";
import type { CheckboxProps } from "./index.types";

const sizeClasses: Record<
  NonNullable<CheckboxProps["size"]>,
  { pill: string; box: string; text: string }
> = {
  sm: { pill: "px-3 py-1.5 text-sm", box: "h-4 w-4", text: "text-sm" },
  md: { pill: "px-4 py-2 text-base", box: "h-5 w-5", text: "text-base" },
  lg: { pill: "px-5 py-2.5 text-lg", box: "h-6 w-6", text: "text-lg" },
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    name,
    options,
    value: valueProp,
    onChange,
    direction = "row",
    size = "md",
    fullWidth = false,
    error,
    className = "",
    selectedColor = "#0f1724",
    selectedTextColor = "#ffffff",
    unselectedTextColor = "#0f1724",
    showPills = true,
    iconColor = "#ffffff", // new default
    iconUncheckedColor = "#d1d5db", // new default,
    selectedBorderColor,
  } = props;
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = React.useState<string[]>(
    valueProp ?? []
  );

  React.useEffect(() => {
    if (isControlled) {
      setInternalValue(valueProp ?? []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueProp, isControlled]);

  const current = isControlled ? (valueProp as string[]) : internalValue;

  const toggle = (val: string) => {
    const exists = current.includes(val);
    const next = exists ? current.filter((v) => v !== val) : [...current, val];

    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div
        className={`flex ${
          direction === "row" ? "flex-row gap-4 flex-wrap" : "flex-col gap-2"
        }`}
        role="group"
        aria-label={name}
      >
        {options.map((opt, idx) => {
          const checked = current.includes(opt.value);

          const basePill =
            "inline-flex items-center gap-3 rounded-full border transition disabled:opacity-50 disabled:cursor-not-allowed " +
            sizeClasses[size].pill;

          const boxBase =
            "inline-flex items-center justify-center rounded-sm border bg-white p-1";

          const selectedInlineStyle: React.CSSProperties = checked
            ? {
                backgroundColor: showPills ? selectedColor : undefined,
                borderColor: selectedColor,
                color: selectedTextColor,
              }
            : {
                backgroundColor: showPills ? "#ffffff" : undefined,
                borderColor: "#d1d5db",
                color: unselectedTextColor,
              };

          const iconClass = `stroke-current ${sizeClasses[size].box}`;

          const labelOuterClasses = `${
            showPills ? basePill : "inline-flex items-center gap-3"
          } ${fullWidth ? "w-full justify-between" : "justify-center"} ${
            opt.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`;

          const inputId = `${name}-${opt.value}-${idx}`;

          return (
            <div
              key={`${opt.value}-${idx}`}
              className={labelOuterClasses}
              style={selectedInlineStyle}
            >
              {/* Hidden but focusable input. Use `sr-only` so label clicks toggle it. */}
              <input
                id={inputId}
                type="checkbox"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => {
                  if (opt.disabled) return;
                  toggle(opt.value);
                }}
                disabled={opt.disabled}
                aria-checked={checked}
                aria-disabled={opt.disabled || undefined}
                className="sr-only"
                ref={(el) => {
                  if (!el) return;
                  el.indeterminate = !!opt.indeterminate && !checked;
                }}
              />

              {/* Label is the visible control; clicking it toggles the hidden input (native htmlFor behavior) */}
              <label
                htmlFor={inputId}
                className="inline-flex items-center gap-3 w-full"
                style={{ width: fullWidth ? "100%" : undefined }}
              >
                <span
                  className={`${boxBase} ${sizeClasses[size].box}`}
                  aria-hidden
                  style={{
                    borderColor: checked
                      ? selectedBorderColor || selectedColor
                      : "#d1d5db",
                    backgroundColor: checked ? selectedColor : "#ffffff",
                  }}
                >
                  {checked ? (
                    <Check className={iconClass} style={{ color: iconColor }} />
                  ) : opt.indeterminate ? (
                    <Minus className={iconClass} style={{ color: iconColor }} />
                  ) : (
                    <span
                      className={iconClass}
                      style={{ color: iconUncheckedColor }}
                    />
                  )}
                </span>

                <span
                  style={{
                    color: checked ? selectedTextColor : unselectedTextColor,
                  }}
                  className={sizeClasses[size].text}
                >
                  {opt.label}
                </span>
              </label>
            </div>
          );
        })}
      </div>

      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};
