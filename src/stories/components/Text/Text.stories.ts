/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/Text/Text';


const meta: Meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
    children: "The quick brown fox jumps over the lazy dog",
    primary: true,
    size: 'medium',
    variant: 'normal',
  },
};

export const Secondary: Story = {
  args:{
    children: "The quick brown fox jumps over the lazy dog",
    primary: false,
    size: 'medium',
    variant: 'normal',
    backgroundColor: "#F1B080",
  },
};

export const Mobile: Story = {
  args:{
    primary: true,
    children: "The quick brown fox jumps over the lazy dog",
    size: 'mobile'
  },
};

export const Normal: Story = {
  args:{
    primary: true,
    children: "The quick brown fox jumps over the lazy dog",
    size: 'normal',
  },
};

export const Disabled: Story = {
  args:{
    primary: true,
    children: "The quick brown fox jumps over the lazy dog",
    disabled: true,
    size: 'medium',
  },
};

export const Error: Story = {
  args:{
    primary: true,
    children: "The quick brown fox jumps over the lazy dog",
    size: 'medium',
    error: true,
  },
};