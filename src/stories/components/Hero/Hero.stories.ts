import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../../components/Hero/Hero';
import { expect, within } from "@storybook/test";

const meta: Meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
  args: {
    size: 'normal',
    src: 'image_component.jpg',
    alt: 'Painting',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Hero")).toBeInTheDocument();
  },
};

export const NormalDisabled: Story = {
  args: {
    size: 'normal',
    src: 'image_component.jpg',
    alt: 'Painting',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Hero")).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  args: {
    size: 'mobile',
    src: 'image_component.jpg',
    alt: 'Painting',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Hero")).toBeInTheDocument();
  },
};

export const MobileDisabled: Story = {
  args: {
    size: 'mobile',
    src: 'image_component.jpg',
    alt: 'Painting',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("Hero")).toBeInTheDocument();
  },
};

