/**
 * Stories for the Footer component
 * @author  Nigel Abrera
 * @date    August 6th 2024
 */
import { expect, within } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
    title: 'Page Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        size: 'normal',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByTestId('footer')).toBeInTheDocument();
    },
};