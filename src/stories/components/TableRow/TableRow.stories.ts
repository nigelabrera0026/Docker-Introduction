import { Meta, StoryObj } from "@storybook/react";
import { TableRow } from "./TableRow";
import { expect, within } from "@storybook/test";

const meta: Meta = {
  title: "Components/TableRow",
  component: TableRow,
  tags:['autodocs'],
  argTypes: {
    backgroundColor: { control: "color"},
    size: {
      control: {
        type: 'select',
        options: ['mobile', 'normal'],
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Normal: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3'],
    size: 'normal',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3'],
    size: 'normal',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};


export const Mobile: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3'],
    size: 'mobile',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};

export const MobileDisabled: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3'],
    size: 'mobile',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};

