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
    variant: {
      control: { type: 'select', options: ['normal', 'bold', 'lighter'] },
    },
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

export const Small: Story = {
  args:{
    primary: true,
    children: "The quick brown fox jumps over the lazy dog",
    size: 'small'
  },
};

export const Large: Story = {
  args:{
    primary: true,
    children: "The quick brown fox jumps over the lazy dog",
    size: 'large',
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
//# Important Dev Notes
// After installing active_admin and active_storage, make sure you include sassc in the gemfile.