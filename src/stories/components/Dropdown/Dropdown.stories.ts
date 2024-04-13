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
  tags:['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<DropdownProps>;

export default meta;

export const Default: StoryObj<DropdownProps> = {
  args: {
    size: 'normal'
  }
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
  },
};

export const Open: StoryObj<DropdownProps> = {
  args: {
    open: true,
  },
};

export const Mobile: StoryObj<DropdownProps> = {
  args: {
    size: 'mobile'
  }
};

export const MobileDisabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
    size: 'mobile'
  }
};

export const MobileOpen: StoryObj<DropdownProps> = {
  args: {
    size: 'mobile',
    open: true,
  }
};

