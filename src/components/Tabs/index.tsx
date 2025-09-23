import * as React from "react";
import type { TabsProps, Tab } from "./index.types";

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  rounded = true,
  activeTextColor = "#ffffff",
  activeBgColor = "#000000",
  inactiveTextColor = "#374151",
  borderColor = "#e5e7eb",
  sectionBgColor = "#ffffff",
  hoverEffect = true,
  fullWidth = true,
  className = "",
  style,
  ...props
}) => {
  const activeTab = tabs.find((t) => t.value === value);

  const containerRadius = rounded ? "rounded-2xl" : "rounded-sm";
  const btnRadius = rounded ? "rounded-lg" : "rounded";

  return (
    <div id="tab-bar" className={`mb-8 ${className}`} style={style} {...props}>
      <div
        className={`p-2 shadow-sm border ${containerRadius}`}
        style={{ backgroundColor: sectionBgColor, borderColor }}
      >
        <div className={`flex ${fullWidth ? "space-x-2" : "gap-2 inline-flex"}`}>
          {tabs.map((tab: Tab) => {
            const isActive = value === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => onChange(tab.value)}
                className={`tab-btn inline-flex items-center justify-center gap-2 font-medium transition-all ${
                  fullWidth ? "flex-1" : "w-auto"
                } ${btnRadius} px-6 py-3`}
                style={{
                  backgroundColor: isActive ? activeBgColor : "transparent",
                  color: isActive ? activeTextColor : inactiveTextColor,
                  border: isActive ? `1px solid ${borderColor}` : "1px solid transparent",
                  ...(hoverEffect && !isActive ? { cursor: "pointer" } : {}),
                }}
                aria-pressed={isActive}
                aria-label={tab.label}
              >
                {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {activeTab && (
        <div
          className="mt-6 p-6 rounded-md border"
          style={{ borderColor }}
          role="tabpanel"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
