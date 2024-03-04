/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../../components/Dropdown/Dropdown';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};