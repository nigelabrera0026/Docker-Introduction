/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/
import { userEvent, within } from "@storybook/test";
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const Open: StoryObj<DropdownProps> = {
  args: {
    open: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const Mobile: StoryObj<DropdownProps> = {
  args: {
    size: 'mobile'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const MobileDisabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
    size: 'mobile'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

export const MobileOpen: StoryObj<DropdownProps> = {
  args: {
    size: 'mobile',
    open: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown'));
  },
};

