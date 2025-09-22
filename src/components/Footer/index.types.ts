import * as React from "react";

export type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  /** optional icon component e.g. from lucide-react */
  icon?: React.ReactNode;
};

export type FooterProps = {
  /** Brand title shown on the left (or used for alt text if logo provided) */
  title?: string;
  /** Optional logo image URL (40x40 recommended) */
  logo?: string;
  /** Primary navigation or quick links shown in the center */
  links?: FooterLink[];
  /** Secondary legal links (privacy, terms) shown in the right/secondary area */
  legalLinks?: FooterLink[];
  /** Optional social links (icons recommended) */
  social?: SocialLink[];
  /** Override copyright text; if omitted default will be "© YEAR Title. All rights reserved." */
  copyrightText?: string;
  /** Small helper/attribution text (optional) */
  smallText?: string;
  /** Pass custom Tailwind classes to outer container (optional) */
  className?: string;
  /** Custom React node for the right-most area (overrides legal+social area if provided) */
  rightContent?: React.ReactNode;
};
