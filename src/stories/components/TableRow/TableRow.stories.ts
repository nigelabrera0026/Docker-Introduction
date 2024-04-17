import { Meta, StoryObj } from "@storybook/react";
import {TableRow} from "./TableRow";

const meta: Meta = {
  title: "Components/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    content: "Row content",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    content: "Row content",
  },
};
