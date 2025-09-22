import React from "react";
import type { MenuProps } from "./index.types";

export const Menu: React.FC<MenuProps> = ({
  label,
  items,
  className = "",
  onSelect,
}) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-slate-900 focus:outline-none"
      >
        <span>{label}</span>
        {/* Chevron icon */}
        <svg
          className="h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1.0l-4.25 4.657a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-2 p-4 w-56 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
        <div className="flex flex-col space-y-2">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href || "#"}
              onClick={(e) => {
                e.preventDefault();
                onSelect?.(item);
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
