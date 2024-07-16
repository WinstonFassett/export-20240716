import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDelivery } from "./ConfirmDelivery";
import "./page.css";

const meta = {
  title: "Example/ConfirmDelivery",
  component: ConfirmDelivery,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ConfirmDelivery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidOrderNumber: Story = {};
