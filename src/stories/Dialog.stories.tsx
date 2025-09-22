// Dialog.stories.tsx
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "../components/Dialog";
import { Button } from "../components/Button"; // <-- using your Button component
import TextInput from "../components/TextInput";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

// Utility wrapper for controlled open/close using your Button
const DialogWrapper = (props: React.ComponentProps<typeof Dialog>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: StoryObj<typeof Dialog> = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    title: "Default Dialog",
    children: (
      <p>This is a simple dialog body. You can put any content here.</p>
    ),
    footer: <Button onClick={() => {}}>Confirm</Button>,
  },
};

export const Sizes: StoryObj<typeof Dialog> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      {(["sm", "md", "lg", "full"] as const).map((size) => (
        <DialogWrapper key={size} {...args} size={size} title={`Size: ${size}`}>
          <p>Dialog with size {size}</p>
        </DialogWrapper>
      ))}
    </div>
  ),
};

export const WithCustomContent: StoryObj<typeof Dialog> = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    title: "Custom Content",
    children: (
      <div className="space-y-4">
        <p className="text-slate-700 dark:text-slate-300">
          Here’s a dialog with custom interactive content:
        </p>
        <TextInput type="text" placeholder="Type here..." />
        <div className="flex justify-end gap-2">
          <Button onClick={() => {}}>Cancel</Button>
          <Button onClick={() => {}}>Save</Button>
        </div>
      </div>
    ),
  },
};

export const NonClosable: StoryObj<typeof Dialog> = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    title: "Non-closable Dialog",
    disableClose: true,
    children: (
      <p>
        This dialog cannot be closed by Esc, overlay click, or the close button.
      </p>
    ),
  },
};
