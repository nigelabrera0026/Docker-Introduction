/*
@author:    Nigel Abrera
@date:      April 30th, 2024
*/

import { userEvent, within } from "@storybook/test";
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar/NavigationBar';

const meta: Meta = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
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
    size: 'normal',
  },
};