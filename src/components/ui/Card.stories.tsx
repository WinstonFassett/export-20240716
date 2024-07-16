import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = <div className="card-body">This is the card body</div>;

export const Plain: Story = {
  args: {
    children,
  },
};

export const Bordered: Story = {
  args: {
    border: "bordered",
    children,
  },
};

export const Elevated: Story = {
  args: {
    className: 'shadow-xl',
    children,
  },
};

