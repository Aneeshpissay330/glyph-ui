// Checkbox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "../components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

/**
 * Default: interactive story that owns its state so clicks update the UI.
 */
export const Default: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || []
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
    onChange: (vals: string[]) => console.log("changed", vals),
  },
};

export const Playground: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || []
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "play",
    options: [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
    ],
    value: [],
  },
};

export const WithSelected: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || []
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "fruits-selected",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
    value: ["banana"],
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || []
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "fruits-disabled",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana", disabled: true },
      { value: "orange", label: "Orange" },
    ],
    value: ["apple"],
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [sm, setSm] = React.useState<string[]>(
      (args.value as string[]) || ["one"]
    );
    const [md, setMd] = React.useState<string[]>(
      (args.value as string[]) || ["one"]
    );
    const [lg, setLg] = React.useState<string[]>(
      (args.value as string[]) || ["one"]
    );

    return (
      <div className="flex flex-col gap-4">
        <Checkbox {...args} size="sm" value={sm} onChange={setSm} />
        <Checkbox {...args} size="md" value={md} onChange={setMd} />
        <Checkbox {...args} size="lg" value={lg} onChange={setLg} />
      </div>
    );
  },
  args: {
    name: "sizes",
    options: [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
    ],
    value: ["one"],
    onChange: (vals: string[]) => console.log(vals),
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || []
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "full",
    options: [
      { value: "a", label: "Option A" },
      { value: "b", label: "Option B" },
    ],
    value: [],
    fullWidth: true,
    onChange: (vals: string[]) => console.log(vals),
  },
};

export const CustomColors: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || ["x"]
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "colors",
    options: [
      { value: "x", label: "Custom" },
      { value: "y", label: "Other" },
    ],
    value: ["x"],
    selectedColor: "#0ea5e9", // sky-500
    selectedTextColor: "#052024",
    onChange: (vals: string[]) => console.log("colors:", vals),
  },
};

/**
 * WithBorderAndIconColors: demonstrates custom border and icon colors.
 */
export const WithBorderAndIconColors: Story = {
  render: (args) => {
    const [vals, setVals] = React.useState<string[]>(
      (args.value as string[]) || ["one"]
    );
    return <Checkbox {...args} value={vals} onChange={setVals} />;
  },
  args: {
    name: "border-icon",
    options: [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
    ],
    value: ["one", "two"],
    selectedColor: "#0f172a", // dark background
    selectedBorderColor: "#ffffff", // white border
    selectedTextColor: "#ffffff",
    unselectedTextColor: "#0f172a",
    iconColor: "#22c55e", // green check icon
    iconUncheckedColor: "#64748b", // slate gray empty icon
  },
};
