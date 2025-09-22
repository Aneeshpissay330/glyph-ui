// Header.stories.tsx
import { type Meta, type StoryObj } from "@storybook/react";
import { Bell, Sun } from "lucide-react";
import type { ComponentProps } from "react";
import { Avatar } from "../components/Avatar";
import { Header } from "../components/Header";
import { IconButton } from "../components/IconButton";
import { Menu } from "../components/Menu";

type StoryProps = ComponentProps<typeof Header>;

const meta: Meta<StoryProps> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    title: "My Dashboard",
    navLinks: [
      { label: "Home", href: "#", active: true },
      {
        label: "Products",
        children: [
          { label: "Overview", href: "#" },
          { label: "Pricing", href: "#" },
        ],
      },
      { label: "About", href: "#" },
    ],
  },
  argTypes: {
    logo: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    rightContent: { control: false },
    navLinks: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const WithLogo: Story = {
  args: {
    logo: "https://placehold.co/40x40",
    title: "BrandName",
  },
};

export const WithDropdownLinks: Story = {
  args: {
    navLinks: [
      { label: "Dashboard", href: "#", active: true },
      {
        label: "Services",
        children: [
          { label: "Consulting", href: "#" },
          { label: "Development", href: "#" },
          { label: "Design", href: "#" },
        ],
      },
      { label: "Contact", href: "#" },
    ],
  },
};

/** Example: pass buttons + avatar menu via rightContent */
export const WithRightContent: Story = {
  args: {
    title: "Product Console",
    navLinks: [
      { label: "Overview", href: "#", active: true },
      { label: "Reports", href: "#" },
      { label: "Settings", href: "#" },
    ],
    rightContent: (
      <div className="flex items-center gap-3">
        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <IconButton
            aria-label="Notifications"
            icon={<Bell size={18} />}
            color="#4f46e5"
            backgroundColor="#ffffff"
          />
          <IconButton
            aria-label="Dark Mode"
            icon={<Sun className="h-5 w-5" />}
            color="#4f46e5"
            backgroundColor="#ffffff"
          />
        </div>

        {/* Avatar dropdown menu */}
        <Menu
          label={<Avatar name="Aneesh" role="Product" size="md" />}
          items={[
            { label: "Profile", href: "/profile" },
            { label: "Settings", href: "/settings" },
            {
              label: "Sign out",
              href: "/logout",
              description: "End your session",
            },
          ]}
        />
      </div>
    ),
  },
};
