/**
 * Stories for Dropdown 
 * @author    Nigel Abrera
 * @date      March 03, 2024
 */
import { userEvent, within } from "@storybook/test";
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown} from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Page Components/Dropdown',
  component: Dropdown,
  tags:['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: 'normal'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const Open: Story = {
  args: {
    open: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const Mobile: Story = {
  args: {
    size: 'mobile'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const MobileDisabled: Story = {
  args: {
    disabled: true,
    size: 'mobile'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const MobileOpen: Story = {
  args: {
    size: 'mobile',
    open: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

