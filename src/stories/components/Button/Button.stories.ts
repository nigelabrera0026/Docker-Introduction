/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, fn } from "@storybook/test";
import { Button } from './Button';

const meta: Meta<typeof Button> = {
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
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
};

export const Disabled: Story = {
  args:{
    disabled: true,
    label: 'Button',
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
};

export const Mobile: Story = {
  args: {
    size: 'mobile',
    label: 'Button',
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
}

export const MobileDisabled: Story = {
  args: {
    size: 'mobile',
    label: 'Button',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
}

