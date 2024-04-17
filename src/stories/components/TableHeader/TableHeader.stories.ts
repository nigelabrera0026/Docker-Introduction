import { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "./TableHeader";
import { expect, within } from "@storybook/test";

const meta: Meta = {
  title: "Components/TableHeader",
  component: TableHeader,
  tags:['autodocs'],
  argTypes: {
    size: {
      backgroundColor: {control: "color"},
      control: {
        type: 'select',
        options: ['mobile', 'normal'],
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Normal: Story = {
  args: {
    headers: ['Header 1'],
    size: 'normal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    headers: ['Header 1'],
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
    headers: ['Header 1'],
    size: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};

export const MobileDisabled: Story = {
  args: {
    headers: ['Header 1'],
    size: 'mobile',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableRow")).toBeInTheDocument();
  },
};
