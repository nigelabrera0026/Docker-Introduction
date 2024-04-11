/*
@author:    Nigel Abrera
@date:      March 09, 2024
*/

import { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../../components/Radio/Radio';

const meta: Meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3'},
    ],
    onChange: (value: string) => console.log(value),
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
}

export const SelectiveDisabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', disabled: true },
      { label: 'Option 2', value: 'option2'},
      { label: 'Option 3', value: 'option3'},
    ],
    onChange: (value: string) => console.log(value),
  },
}

