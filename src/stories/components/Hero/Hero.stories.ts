import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../../components/Hero/Hero';

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
};

export const NormalDisabled: Story = {
  args: {
    size: 'normal',
    src: 'image_component.jpg',
    alt: 'Painting',
    disabled: true,
  },
};

export const Mobile: Story = {
  args: {
    size: 'mobile',
    src: 'image_component.jpg',
    alt: 'Painting',
    disabled: false,
  },
};

export const MobileDisabled: Story = {
  args: {
    size: 'mobile',
    src: 'image_component.jpg',
    alt: 'Painting',
    disabled: true,
  },
};

