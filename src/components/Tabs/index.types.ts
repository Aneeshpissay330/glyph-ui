export interface Tab {
  label: string;
  value: string; // unique key
  icon?: React.ReactNode; // optional icon
  content: React.ReactNode; // actual content to render when active
}

import * as React from "react";

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: Tab[];
  value: string; // which tab is active
  onChange: (value: string) => void;

  rounded?: boolean;
  activeTextColor?: string;
  activeBgColor?: string;
  inactiveTextColor?: string;
  borderColor?: string;
  hoverEffect?: boolean;
  fullWidth?: boolean;
  sectionBgColor?: string;
}