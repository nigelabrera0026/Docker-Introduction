/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../../components/Image/Image';

const meta: Meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    size: 'mobile',
    src: '../../../public/IMG_2441Copy.jpg',
    alt: 'Nigel_Abrera_image',
  },
};

export const Normal: Story = {
  args: {
    size: 'normal',
    src: '../../../public/IMG_2441Copy.jpg',
    alt: 'Nigel_Abrera_image',
  },
};
