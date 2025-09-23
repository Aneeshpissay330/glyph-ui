// RadioGroup.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioGroup } from "../components/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    selectedColor: { control: "color" },
    selectedTextColor: { control: "color" },
    unselectedTextColor: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("option2"); // show selected immediately
    return (
      <div style={{ padding: 24 }}>
        <RadioGroup
          {...args}
          name="example"
          value={value}
          onChange={setValue}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <div style={{ marginTop: 12 }}>Current value: <strong>{value}</strong></div>
      </div>
    );
  },
  args: {
    direction: "row",
    size: "md",
    fullWidth: false,
    selectedColor: "#0f1724",
    selectedTextColor: "#ffffff",
    unselectedTextColor: "#0f1724",
  },
};
