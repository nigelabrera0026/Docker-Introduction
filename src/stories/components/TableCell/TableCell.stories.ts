import { Meta, StoryObj } from "@storybook/react";
import { TableCell } from "./TableCell";
import { expect, within } from "@storybook/test";

const meta: Meta = {
  title: "Components/TableCell",
  component: TableCell,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: {
        type: 'select',
        options: ['mobile', 'normal'],
      }
    }
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    disabled: false,
    children: "Cell content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableCell")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    content: "Cell content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableCell")).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  args: {
    size: 'mobile',
    disabled: false,
    children: "Cell content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableCell")).toBeInTheDocument();
  },
};

export const MobileDisabled: Story = {
  args: {
    size: 'mobile',
    disabled: true,
    children: "Cell content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableCell")).toBeInTheDocument();
  },
};