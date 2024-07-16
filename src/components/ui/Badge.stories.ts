import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "./Badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {    
    children: "Badge",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Badge",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Badge",
  },
};

export const Red: Story = {
  args: {
    color: "error",
    children: "Badge",
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    children: "Badge",
  },
};
