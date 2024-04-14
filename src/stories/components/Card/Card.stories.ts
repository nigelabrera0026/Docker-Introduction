/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/

import { userEvent, within } from "@storybook/test";
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

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

export const Normal: Story = {
  args: {
    image: {
      src: 'image_component.jpg', // Replace with your image path
      alt: 'Image description',
      size: 'mobile',
    },
    size: 'normal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
};

export const Disabled: Story = {
  args: {
    image: {
      src: 'image_component.jpg',
      alt: 'Image description',
      size: 'mobile',
    },
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
}

export const Mobile: Story = {
  args: {
    image: {
      src: 'image_component.jpg',
      alt: 'Image description',
      size: 'mobile',
      disabled: false
    },
    size: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
};

export const MobileDisabled: Story = {
  args: {
    image: {
      src: 'image_component.jpg',
      alt: 'Image description',
      size: 'mobile',
    },
    disabled: true,
    size: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('Button'));
  },
};

