/**
 * Stories for Radio 
 * @author    Nigel Abrera 
 * @date      March 09, 2024
 */
import { userEvent, within } from "@storybook/test";
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';


const meta: Meta = {
  title: 'Base Components/RadioButton',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color'},
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3'},
    ],
    onChange: (value: string) => console.log(value),

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('option1'));
    await userEvent.click(canvas.getByTestId('option2'));
    await userEvent.click(canvas.getByTestId('option3'));
  },
};


export const Disabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', disabled: true },
      { label: 'Option 2', value: 'option2', disabled: true  },
      { label: 'Option 3', value: 'option3', disabled: true },
    ],
    onChange: (value: string) => console.log(value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('option1'));
    await userEvent.click(canvas.getByTestId('option2'));
    await userEvent.click(canvas.getByTestId('option3'));
  },
};

export const SelectiveDisabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', disabled: true },
      { label: 'Option 2', value: 'option2'},
      { label: 'Option 3', value: 'option3'},
    ],
    onChange: (value: string) => console.log(value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('option1'));
    await userEvent.click(canvas.getByTestId('option2'));
    await userEvent.click(canvas.getByTestId('option3'));
  },
};

export const Mobile: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    onChange: (value: string) => console.log(value),
    size: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('option1'));
    await userEvent.click(canvas.getByTestId('option2'));
    await userEvent.click(canvas.getByTestId('option3'));
  },
};

export const MobileDisabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    onChange: (value: string) => console.log(value),
    size: 'mobile',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('option1'));
    await userEvent.click(canvas.getByTestId('option2'));
    await userEvent.click(canvas.getByTestId('option3'));
  },
};

export const MobileSelectiveDisabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', disabled: true},
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    onChange: (value: string) => console.log(value),
    size: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('option1'));
    await userEvent.click(canvas.getByTestId('option2'));
    await userEvent.click(canvas.getByTestId('option3'));
  },
};


