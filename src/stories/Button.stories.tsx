// Button.stories.tsx
import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import type { ComponentProps } from "react";
import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    hoverEffect: { control: "boolean" },
    rounded: { control: "boolean" },
    fullWidth: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost"],
    },
    loading: { control: "boolean" },
    loadingText: { control: "text" },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

/** Examples */
export const Default: Story = {
  args: { children: "Default Button" },
};

export const WithIcons: Story = {
  args: {
    children: "Button With Icons",
    leftIcon: <span>🌟</span>,
    rightIcon: <span>➡️</span>,
  },
};

export const FullWidth: Story = {
  args: { children: "Full Width Button", fullWidth: true },
};

export const RoundedFalse: Story = {
  args: { children: "Not Rounded Button", rounded: false },
};

export const HoverEffectDisabled: Story = {
  args: {
    children: "No Hover Effect",
    hoverEffect: false,
    color: "#ffffff",
    backgroundColor: "#1f2937",
  },
};

/** New Props Showcase */
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="outline" color="#fff" backgroundColor="#111827">
        Outline
      </Button>
      <Button variant="ghost" color="#fff" backgroundColor="#111827">
        Ghost
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button loading>Loading...</Button>
      <Button loading loadingText="Please wait">
        Custom Text
      </Button>
    </div>
  ),
};
