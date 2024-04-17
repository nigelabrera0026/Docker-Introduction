import { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "./TableHeader";

const meta: Meta = {
  title: "Components/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    title: "Header Title",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    title: "Header Title",
  },
};
