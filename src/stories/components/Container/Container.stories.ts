import { expect, within } from "@storybook/test";
import { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta = {
    title: 'General Components/Container',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: { control: 'color'},
    },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        size: 'normal',
        // children: [Card, Label] //? Check for this stuff.
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByTestId("container")).toBeInTheDocument();
    },
};

export const Mobile: Story = {
    args: {
        size: 'mobile',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByTestId("container")).toBeInTheDocument();
    },
};