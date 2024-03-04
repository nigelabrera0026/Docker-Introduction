/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/Button/Button';

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

export const Primary: Story = {
  args: {
    size: 'medium',
    primary: true,
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args:{
    disabled: true,
    label: 'Button',
  },
};

