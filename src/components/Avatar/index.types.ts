import * as React from "react";

export type AvatarSize = "sm" | "md" | "lg" | "xl" | number;

export interface AvatarProps {
  /** Primary visible name (used for initials & alt text) */
  name: string;
  /** Secondary small role/label (optional) */
  role?: string;
  /** Optional image url for avatar; if omitted a gradient placeholder is shown */
  avatarUrl?: string;
  /**
   * Size preset or exact pixel number.
   * - "sm" -> 28
   * - "md" -> 36 (default)
   * - "lg" -> 44
   * - "xl" -> 56
   * - number -> exact px
   */
  size?: AvatarSize;
  /** whether to show name & role (defaults true) */
  showText?: boolean;
  /** extra tailwind classes for the root element */
  className?: string;
  /** optional click handler for the avatar area */
  onClick?: (e: React.MouseEvent) => void;
}
