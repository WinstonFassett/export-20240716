import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    children: "Button",
  },
};

export const Hover: Story = {
  args: {
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  args: {
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const Primary: Story = {
  args: {
    color: 'primary',
    children: "Button",
  },
};
export const PrimaryHover: Story = {
  args: {
    color: "primary",
    children: "Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const PrimaryClick: Story = {
  args: {
    color: "primary",
    children: "Button",
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "xs",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Button",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    children: "Button",
  },
};
