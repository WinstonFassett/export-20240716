import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./Input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: "Enter order number",
  },
};

export const NonEmpty: Story = {
  args: {
    value: "12345",
  },
};

export const EmptyRed: Story = {
  args: {
    isInvalid: true,
    errorBorderColor: "red.300",
    placeholder: "Enter order number",
  },
};

export const NonEmptyRed: Story = {
  args: {
    isInvalid: true,
    errorBorderColor: "red.300",
    value: "12345",
  },
};
