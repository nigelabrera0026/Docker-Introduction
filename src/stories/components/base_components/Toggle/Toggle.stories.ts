import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from './Toggle';

const meta: Meta = {
    title: 'Base Component/Toggle',
    component: Toggle,
    tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        size: 'normal',
    },
};