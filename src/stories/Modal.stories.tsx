// ...existing code...
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open modal
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <h3 className="text-lg font-semibold mb-2">Modal title</h3>
          <p className="text-sm mb-4">
            This is a simple modal powered by Tailwind classes.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const CustomStyles: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open custom modal
        </Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          backgroundColor="#0f172a"
          width="min(90%,520px)"
          borderRadius="1rem"
          style={{ color: "white" }}
          ariaLabel="Custom dark modal"
        >
          <h3 className="text-xl font-semibold mb-2">Dark modal</h3>
          <p className="text-sm mb-4">
            You can override background, width and border radius via props.
          </p>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              backgroundColor="#fff"
              color="#000"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="p-8">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open form modal
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <h3 className="text-lg font-semibold mb-4">Signup</h3>
          <form
            className="gap-3 flex flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextInput placeholder="Email" />
            <TextInput placeholder="Name" />
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="ml-2"
                backgroundColor="#2563eb"
                color="#fff"
              >
                Save
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    );
  },
};
