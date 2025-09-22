// TextInput.stories.tsx
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

type Comp = typeof TextInput;
type Story = StoryObj<React.ComponentProps<Comp>>;

const meta: Meta<React.ComponentProps<Comp>> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "underlined"],
    },
    fullWidth: { control: "boolean" },
    rounded: { control: "boolean" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    focusedBorderColor: { control: "color" },
    hoverEffect: { control: "boolean" },
    leftIcon: { control: false },
    rightIcon: { control: false },
    error: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

/** Simple uncontrolled default */
export const Default: Story = {
  args: {
    placeholder: "Type here...",
    variant: "outlined",
    fullWidth: true,
    rounded: true,
  },
};

/** Show all main variants */
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-full max-w-xl">
      <div>
        <div className="mb-2 font-medium">Outlined</div>
        <TextInput {...args} variant="outlined" placeholder="Outlined" />
      </div>
      <div>
        <div className="mb-2 font-medium">Contained</div>
        <TextInput {...args} variant="contained" placeholder="Contained" />
      </div>
      <div>
        <div className="mb-2 font-medium">Underlined</div>
        <TextInput {...args} variant="underlined" placeholder="Underlined" />
      </div>
    </div>
  ),
  args: {
    fullWidth: true,
    rounded: true,
  },
};

/** Icons and adornments */
export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <TextInput
        {...args}
        placeholder="Search..."
        leftIcon={<span aria-hidden>🔍</span>}
      />
      <TextInput
        {...args}
        placeholder="With right action"
        rightIcon={
          <Button size="sm" onClick={() => alert("Clicked")}>
            Go
          </Button>
        }
      />
    </div>
  ),
  args: {
    variant: "outlined",
    fullWidth: true,
  },
};

/** Error state + helper text */
export const ErrorState: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <TextInput
        {...args}
        placeholder="Enter email"
        error="Please enter a valid email address."
      />
    </div>
  ),
  args: {
    variant: "outlined",
    fullWidth: true,
    rounded: false,
    borderColor: "#ef4444", // red border by default for the example
  },
};

/** Controlled example showing integration with Button */
export const ControlledExample: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | undefined>(undefined);

    const submit = () => {
      if (!value.trim()) {
        setError("Field is required");
        return;
      }
      setError(undefined);
      alert(`Submitted: ${value}`);
    };

    return (
      <div className="w-full max-w-lg space-y-4">
        <TextInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          variant="outlined"
          fullWidth
          leftIcon={<span aria-hidden>✉️</span>}
          error={error}
        />
        <div className="flex gap-2">
          <Button onClick={() => setValue("")}>
            Clear
          </Button>
          <Button onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    );
  },
};