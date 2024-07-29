/**
 * Stories for NavigationBar component.
 * @author Nigel Abrera
 * @date   April 30th, 2024 
 */

import { within, expect } from "@storybook/test";
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

const meta: Meta = {
  title: 'Page Components/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: 'normal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("NavBar")).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  args: {
    size: 'mobile',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("NavBar")).toBeInTheDocument();
  },
}