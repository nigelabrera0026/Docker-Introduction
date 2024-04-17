/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { expect, within } from "@storybook/test";
const meta: Meta = {
  title: "Components/Table",
  component: Table,
  tags:['autodocs'],
  argTypes: {
    backgroundColor: { controls:"color"},
    size: {
      control: {
        type: 'select',
        options: ['mobile', 'normal'],
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Normal: Story = {
  args: {
    header: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
      ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
      ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3']
    ],
    footer: ['Footer 1', 'Footer 2', 'Footer 3'],
    size: 'normal',
  },
  play: async({canvasElement}) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Table")).toBeInTheDocument();
  }
};

export const Disabled: Story = {
  args: {
    header: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
      ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
      ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3']
    ],
    footer: ['Footer 1', 'Footer 2', 'Footer 3'],
    size: 'normal',
    disabled: true,
  },
  play: async({canvasElement}) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Table")).toBeInTheDocument();
  }
};
export const Mobile: Story = {
  args: {
    header: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
      ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
      ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3']
    ],
    footer: ['Footer 1', 'Footer 2', 'Footer 3'],
    size: 'mobile',
  },
  play: async({canvasElement}) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Table")).toBeInTheDocument();
  }
};
export const MobileDisabled: Story = {
  args: {
    header: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
      ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
      ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3']
    ],
    footer: ['Footer 1', 'Footer 2', 'Footer 3'],
    size: 'mobile',
    disabled: true,
  },
  play: async({canvasElement}) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Table")).toBeInTheDocument();
  }
};

