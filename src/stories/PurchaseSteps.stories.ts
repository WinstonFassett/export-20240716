import type { Meta, StoryObj } from "@storybook/react";
import { PurchaseSteps } from "./PurchaseSteps";
import "./page.css";

const meta = {
  title: "Example/PurchaseSteps",
  component: PurchaseSteps,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PurchaseSteps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveryConfirmed: Story = {};
