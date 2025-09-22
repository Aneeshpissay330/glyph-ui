import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Avatar } from "../components/Avatar";

type StoryProps = ComponentProps<typeof Avatar>;

const meta: Meta<StoryProps> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "Aneesh",
    role: "Product",
  },
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    avatarUrl: { control: "text" },
    size: { control: { type: "select", options: ["sm", "md", "lg", "xl"] } },
    showText: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    avatarUrl: "https://i.pravatar.cc/80?img=12",
    size: "md",
  },
};

export const Compact: Story = {
  args: {
    showText: false,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "xl",
    name: "Aneesh Pissay",
    role: "Product Manager",
  },
};
