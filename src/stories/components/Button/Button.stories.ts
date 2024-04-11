/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color'},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: 'normal',
    label: 'Button',
  }
}

export const Disabled: Story = {
  args:{
    disabled: true,
    label: 'Button',
  },
};

