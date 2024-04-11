/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<DropdownProps>;

export default meta;

export const Primary: StoryObj<DropdownProps> = {
  args: {
    primary: true,
  },
};

export const Secondary: StoryObj<DropdownProps> = {
  args: {
    primary: false,
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
    primary: true,
  },
};

export const Open: StoryObj<DropdownProps> = {
  args: {
    open: true,
    primary: true,
  },
};