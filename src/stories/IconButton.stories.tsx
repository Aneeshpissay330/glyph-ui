import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { IconButton } from "../components/IconButton";
import { Bell, Sun, Search } from "lucide-react";

type StoryProps = ComponentProps<typeof IconButton>;

const meta: Meta<StoryProps> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    icon: <Bell size={18} />,
    size: "md",
    color: "#ffffff",
    backgroundColor: "#4f46e5", // indigo
  },
  argTypes: {
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
    rounded: { control: "boolean" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
    icon: <Sun size={16} />,
    color: "#374151", // gray-700
    backgroundColor: "#e5e7eb", // gray-200
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    icon: <Search size={20} />,
    color: "#ffffff",
    backgroundColor: "#ec4899", // pink-500
  },
};

export const Square: Story = {
  args: {
    rounded: false,
    icon: <Bell size={18} />,
    color: "#4f46e5",
    backgroundColor: "#ffffff",
  },
};
