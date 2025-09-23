
// TextArea.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components/TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["outlined", "contained", "underlined"],
    },
    fullWidth: { control: "boolean" },
    rounded: { control: "boolean" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    error: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Write something...",
    variant: "outlined",
    fullWidth: false,
    rounded: true,
  },
};

export const Contained: Story = {
  args: {
    placeholder: "Contained variant",
    variant: "contained",
    backgroundColor: "#f3f4f6",
    color: "#111827",
    fullWidth: false,
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "Underlined variant",
    variant: "underlined",
    borderColor: "#9ca3af",
    fullWidth: false,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: "There is an error",
    error: "This field is required",
    variant: "outlined",
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: "Full width textarea",
    variant: "outlined",
    fullWidth: true,
  },
};
