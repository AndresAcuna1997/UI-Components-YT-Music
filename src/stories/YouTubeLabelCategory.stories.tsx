import { Meta, StoryObj } from '@storybook/react';
import { YouTubeLabelCategory } from '../components/YouTube/YouTubeLabelCategory';

const meta = {
  title: 'YouTube/Labels/YouTubeLabelCategory',
  component: YouTubeLabelCategory,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof YouTubeLabelCategory>;


export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    label: 'Music',
  }
};