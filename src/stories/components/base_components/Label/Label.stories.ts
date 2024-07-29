/** 
@author:    Nigel Abrera
@date:      March 04, 2024
*/
import { userEvent, expect, within } from "@storybook/test";
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta = {
  title: 'Base Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color'},
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'Email address',
    variant: 'normal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Label'));
  },
};

export const Disabled: Story = {
  args: {
    label: "Email address",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Label")).toBeInTheDocument();
  },
};

export const Error: Story = {
  args: {
    label: "Email address",
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Label'));
  },
};

export const Mobile: Story = {
  args: {
    label: "Email address",
    variant: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Label'));
  },
};

export const MobileDisabled: Story = {
  args: {
    label: "Email address",
    variant: 'mobile',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Label")).toBeInTheDocument();
  },
};

export const MobileError: Story = {
  args: {
    label: "Email address",
    variant: 'mobile',
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Label'));
  },
};
