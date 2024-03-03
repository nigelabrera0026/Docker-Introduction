/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/


import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/Text/Text';

const meta: Meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
    
  },
};