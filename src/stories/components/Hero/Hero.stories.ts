import { Meta, StoryObj } from '@storybook/react';
import Hero from "./Hero";


const meta: Meta = {
  title: 'Components/Hero',
  component: Hero,

} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;