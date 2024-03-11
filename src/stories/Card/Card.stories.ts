/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/


import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components/Card/Card';

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    size: 'mobile',
  },
};

export const Normal: Story = {
  args: {
    size: 'normal',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
}
