import { Meta, StoryObj } from "@storybook/react";
import {TableFooter} from "./TableFooter";

const meta: Meta = {
  title: "Components/TableFooter",
  component: TableFooter,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    content: "Footer content",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    content: "Footer content",
  },
};
