// Switch/index.tsx
import * as React from "react";
import type { SwitchProps } from "./index.types";

/**
 * Single size config (small)
 */
const sizeConfig = {
  trackW: "w-10",
  trackH: 20,
  knobW: 12,
  knobH: 12,
  horizontalPadding: 4,
};

export const Switch: React.FC<Omit<SwitchProps, "size">> = (props) => {
  const {
    name,
    checked: checkedProp,
    onChange,
    label,
    disabled = false,
    fullWidth = false,
    selectedColor = "#10b981", // default (emerald-500)
    unselectedColor = "#e5e7eb", // gray-200
    knobColor = "#ffffff",
    className = "",
    error,
  } = props;

  const cfg = sizeConfig;

  const isControlled = checkedProp !== undefined;
  const [internalChecked, setInternalChecked] = React.useState<boolean>(checkedProp ?? false);
  React.useEffect(() => {
    if (isControlled) setInternalChecked(!!checkedProp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedProp]);

  const checked = isControlled ? !!checkedProp : internalChecked;

  const toggle = () => {
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  const inputId = `${name}-switch`;

  // computed left values:
  const knobLeftUnchecked = `${cfg.horizontalPadding}px`;
  const knobLeftChecked = `calc(100% - ${cfg.knobW}px - ${cfg.horizontalPadding}px)`;

  const trackStyle: React.CSSProperties = {
    backgroundColor: checked ? selectedColor : unselectedColor,
    height: `${cfg.trackH}px`,
    borderRadius: `${cfg.trackH / 2}px`,
    transition: "background-color 150ms ease",
    paddingLeft: `${cfg.horizontalPadding}px`,
    paddingRight: `${cfg.horizontalPadding}px`,
    boxSizing: "border-box",
    display: "inline-block",
    position: "relative",
  };

  const knobStyleBase: React.CSSProperties = {
    width: `${cfg.knobW}px`,
    height: `${cfg.knobH}px`,
    borderRadius: "50%",
    backgroundColor: knobColor,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "left 160ms cubic-bezier(.2,.9,.2,1)",
    boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div
        className={`inline-flex items-center gap-3 ${fullWidth ? "w-full justify-between" : ""}`}
        style={{ alignItems: "center" }}
      >
        {/* Hidden native input for accessibility and keyboard */}
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          className="sr-only"
          checked={checked}
          onChange={() => toggle()}
          disabled={disabled}
          aria-checked={checked}
          aria-disabled={disabled || undefined}
        />

        {/* Label wrapper uses focus-within for keyboard focus ring */}
        <label
          htmlFor={inputId}
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
          className={`inline-flex items-center gap-3 cursor-pointer select-none ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{ width: fullWidth ? "100%" : undefined }}
        >
          {/* Track (pill) */}
          <span
            className={`${cfg.trackW} flex-shrink-0 relative`}
            style={trackStyle}
            aria-hidden
          >
            {/* Knob */}
            <span
              style={{
                ...knobStyleBase,
                left: checked ? knobLeftChecked : knobLeftUnchecked,
              }}
            />
          </span>

          {/* Label text */}
          {label && <span className="text-sm">{label}</span>}
        </label>
      </div>

      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Switch;