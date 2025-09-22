import * as React from "react";

export interface HeaderNavLink {
  label: string;
  href?: string;
  active?: boolean;
  children?: Array<{
    label: string;
    href?: string;
  }>;
}

export interface HeaderProps {
  logo?: string;
  title?: string;
  subtitle?: string;
  navLinks?: HeaderNavLink[];
  rightContent?: React.ReactNode;
}