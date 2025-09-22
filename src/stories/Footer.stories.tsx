import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Footer } from "../components/Footer";
import { Github, Twitter, Linkedin } from "lucide-react";

type StoryProps = ComponentProps<typeof Footer>;

const meta: Meta<StoryProps> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    title: "Acme Co",
    smallText: "© product team",
    links: [
      { label: "Home", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legalLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
    social: [
      {
        label: "GitHub",
        href: "https://github.com",
        icon: <Github className="h-4 w-4" />,
      },
      {
        label: "Twitter",
        href: "https://twitter.com",
        icon: <Twitter className="h-4 w-4" />,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: <Linkedin className="h-4 w-4" />,
      },
    ],
  },
  argTypes: {
    rightContent: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const WithCustomRightContent: Story = {
  args: {
    rightContent: (
      <div className="flex items-center gap-3">
        <a
          href="/support"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Support
        </a>
        <a href="/status" className="text-sm text-gray-600 hover:text-gray-900">
          Status
        </a>
      </div>
    ),
  },
};
