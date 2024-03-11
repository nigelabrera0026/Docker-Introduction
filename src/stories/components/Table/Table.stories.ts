/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Table from '../../components/Table/Table';
import { TableColumn, TableProps } from '../../components/Table/Table.types';


const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  // argTypes: {
  //   variant: {
  //     control: { type: 'select', options: ['normal', 'striped'] },
  //   },
  //   size: {
  //     control: { type: 'select', options: ['small', 'medium', 'large'] },
  //   },
  //   disabled: {
  //     control: 'boolean',
  //   },
  // },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    columns: [
      { key: 'col2', title: 'Column 2' },
    ],
    data: [
      ['Row 1, Cell 1', 'Row 1, Cell 2'],
      ['Row 2, Cell 1', 'Row 2, Cell 2'],
      ['Row 3, Cell 1', 'Row 3, Cell 2'],
    ],
    footer: 'This is a footer',
  },
};
// const Template: Story = (args) => <Table {...args} />;

// export const Default = Template({});
// Default.args = {
//   columns: [
//     { key: 'col1', title: 'Column 1' },
//     { key: 'col2', title: 'Column 2' },
//   ],
//   data: [
//     ['Row 1, Cell 1', 'Row 1, Cell 2'],
//     ['Row 2, Cell 1', 'Row 2, Cell 2'],
//     ['Row 3, Cell 1', 'Row 3, Cell 2'],
//   ],
//   footer: 'This is a footer',
// };