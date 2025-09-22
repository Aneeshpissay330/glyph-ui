export interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface MenuProps {
  /** Visible label for the menu trigger (string or element like avatar) */
  label: React.ReactNode;
  /** Optional chevron or trigger icon will be shown automatically */
  active?: boolean;
  /** Menu items to render inside dropdown */
  items: MenuItem[];
  /** Optional className applied to the trigger */
  className?: string;
  /** Optional callback when an item is selected */
  onSelect?: (item: MenuItem) => void;
}
