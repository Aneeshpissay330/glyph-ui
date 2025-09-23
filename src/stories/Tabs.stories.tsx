import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Home, User, Settings as SettingsIcon } from "lucide-react";
import { Tabs } from "../components/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    activeBgColor: { control: "color" },
    activeTextColor: { control: "color" },
    inactiveTextColor: { control: "color" },
    borderColor: { control: "color" },
    sectionBgColor: { control: "color" },
    rounded: { control: "boolean" },
    hoverEffect: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => {
    const defaultTab = args.tabs?.[0]?.value ?? "home";
    const [value, setValue] = React.useState<string>(args.value ?? defaultTab);

    return (
      <div style={{ padding: 24 }}>
        <Tabs {...args} value={value} onChange={setValue} />
        <div style={{ marginTop: 16 }}>
          Current value: <strong>{value}</strong>
        </div>
      </div>
    );
  },
  args: {
    tabs: [
      {
        label: "Home",
        value: "home",
        icon: <Home size={16} />,
        content: <div>Home content</div>,
      },
      {
        label: "Profile",
        value: "profile",
        icon: <User size={16} />,
        content: <div>Profile content</div>,
      },
      {
        label: "Settings",
        value: "settings",
        icon: <SettingsIcon size={16} />,
        content: <div>Settings content</div>,
      },
    ],
    value: "home",
    rounded: true,
    hoverEffect: true,
    fullWidth: true,
    activeBgColor: "#111827",
    activeTextColor: "#ffffff",
    inactiveTextColor: "#374151",
    borderColor: "#e5e7eb",
    sectionBgColor: "#ffffff",
  },
};
