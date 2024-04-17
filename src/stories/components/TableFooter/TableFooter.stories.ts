import { Meta, StoryObj } from "@storybook/react";
import { TableFooter } from "./TableFooter";
import { expect, within } from "@storybook/test";
const meta: Meta = {
  title: "Components/TableFooter",
  component: TableFooter,
  tags:['autodocs'],
  argTypes: {
    backgroundColor:{ controls: "color"},
    size: {
      control: {
        type: 'select',
        options: ['mobile', 'normal'],
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Normal: Story = {
  args: {
    footers: ['Footer 1'],
    size: 'normal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableFooter")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    footers: ['Footer 1'],
    size: 'normal',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableFooter")).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  args: {
    footers: ['Footer 1'],
    size: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableFooter")).toBeInTheDocument();
  },
};

export const MobileDisabled: Story = {
  args: {
    footers: ['Footer 1'],
    size: 'normal',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("TableFooter")).toBeInTheDocument();
  },
};
