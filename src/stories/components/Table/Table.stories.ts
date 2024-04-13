/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
import { Meta, StoryObj } from '@storybook/react';
import Table from '../../components/Table/Table';
import { TableProps } from '../../components/Table/Table.types'; // Import the TableProps

const meta: Meta<TableProps> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'col1', title: 'Column 1' },
      { key: 'col2', title: 'Column 2' },
    ],
    data: [
      ['Row 1, Cell 1', 'Row 1, Cell 2'],
      ['Row 2, Cell 1', 'Row 2, Cell 2'],
      ['Row 3, Cell 1', 'Row 3, Cell 2'],
    ],
    footer: "This is a Footer",
  },
};


export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
    size: 'mobile',
  },
};


export const DisabledMobile: Story = {
  args: {
    ...Default.args,
    disabled: true,
    size: 'mobile',
  },
};

