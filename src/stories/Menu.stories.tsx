import { type Meta, type StoryObj } from "@storybook/react";
import { ShoppingBag, DollarSign, Book } from "lucide-react";
import { Menu } from "../components/Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    label: "Products",
    items: [
      {
        label: "Overview",
        href: "#",
        description: "Learn about our products",
        icon: <ShoppingBag className="h-4 w-4" />,
      },
      {
        label: "Pricing",
        href: "#",
        description: "Plans & pricing",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        label: "Docs",
        href: "#",
        description: "Developer documentation",
        icon: <Book className="h-4 w-4" />,
      },
    ],
  },
};

export const Active: Story = {
  args: {
    label: "Services",
    active: true,
    items: [
      { label: "Consulting", href: "#", description: "Expert guidance" },
      { label: "Development", href: "#", description: "Custom solutions" },
    ],
  },
};

export const WithIconsOnly: Story = {
  args: {
    label: "Resources",
    items: [
      { label: "Blog", href: "#", icon: <Book className="h-4 w-4" /> },
      { label: "Docs", href: "#", icon: <Book className="h-4 w-4" /> },
    ],
  },
};
