/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/

import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components/Label/Label';

const meta: Meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email address',
    variant: 'normal',
  },
};

export const Mobile: Story = {
  args: {
    label: "Email address",
    variant: 'mobile',
    disable: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email address",
    disabled: true,
  }
}

export const Error: Story = {
  args: {
    label: "Email address",
    error: true,

  }
}