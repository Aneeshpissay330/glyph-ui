// Switch.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch } from "../components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [val, setVal] = React.useState<boolean>(!!args.checked);
    return <Switch {...args} checked={val} onChange={setVal} />;
  },
  args: {
    name: "default",
    label: "Enable feature",
    checked: false,
    onChange: (v: boolean) => console.log("changed", v),
  },
};

export const Playground: Story = {
  render: (args) => {
    const [val, setVal] = React.useState<boolean>(!!args.checked);
    return <Switch {...args} checked={val} onChange={setVal} />;
  },
  args: {
    name: "play",
    label: "Play mode",
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [val, setVal] = React.useState<boolean>(!!args.checked);
    return <Switch {...args} checked={val} onChange={setVal} />;
  },
  args: {
    name: "disabled",
    label: "Can't change me",
    checked: true,
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [val, setVal] = React.useState<boolean>(!!args.checked);
    return <Switch {...args} checked={val} onChange={setVal} />;
  },
  args: {
    name: "full",
    label: "Full width switch",
    checked: false,
    fullWidth: true,
  },
};

export const CustomColors: Story = {
  render: (args) => {
    const [val, setVal] = React.useState<boolean>(!!args.checked);
    return <Switch {...args} checked={val} onChange={setVal} />;
  },
  args: {
    name: "colors",
    label: "Custom color",
    checked: true,
    selectedColor: "#0ea5e9", // sky-500
    unselectedColor: "#f8fafc",
    knobColor: "#042331",
  },
};