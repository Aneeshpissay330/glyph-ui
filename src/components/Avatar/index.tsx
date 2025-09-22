import React from "react";
import type { AvatarProps } from "./index.types";
import { User as UserIcon } from "lucide-react";

const sizeMap = (s: AvatarProps["size"]) => {
  if (typeof s === "number")
    return { px: s, txt: s > 40 ? "text-base" : "text-sm" };
  switch (s) {
    case "sm":
      return { px: 28, txt: "text-sm" };
    case "lg":
      return { px: 44, txt: "text-base" };
    case "xl":
      return { px: 56, txt: "text-lg" };
    case "md":
    default:
      return { px: 36, txt: "text-sm" };
  }
};

export const Avatar: React.FC<AvatarProps> = ({
  name,
  role,
  avatarUrl,
  size = "md",
  showText = true,
  className = "",
  onClick,
}) => {
  const { px, txt } = sizeMap(size);
  const initial = name?.trim()?.charAt(0)?.toUpperCase() ?? "?";
  // For Tailwind-friendly output we use inline style for exact px fallback.
  const style = { width: px, height: px };

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          style={style}
          className="rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div
          style={style}
          className="rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-medium flex-shrink-0"
        >
          {/* if px is large enough show initials else show icon */}
          {px >= 40 ? (
            <span className="select-none">{initial}</span>
          ) : (
            <UserIcon className="h-4 w-4" />
          )}
        </div>
      )}

      {showText && (
        <div className="hidden sm:flex flex-col text-left min-w-0">
          <span
            className={`text-sm font-semibold leading-tight truncate ${
              txt === "text-lg" ? "text-base" : ""
            }`}
          >
            {name}
          </span>
          {role && (
            <span className="text-xs text-gray-500 truncate">{role}</span>
          )}
        </div>
      )}
    </div>
  );
};
