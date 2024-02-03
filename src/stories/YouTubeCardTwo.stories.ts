import { Meta, StoryObj } from '@storybook/react';
import { YouTubeCardTwo } from '../components/YouTube/YouTubeCardTwo';
import '../index.css';
const meta = {
  title: 'YouTube/Cards/YouTubeCardTwo',
  component: YouTubeCardTwo,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof YouTubeCardTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    artist: 'HOME',
    image: 'https://i.ytimg.com/vi/8GW6sLrK40k/hqdefault.jpg',
    title: 'Resonance',
    views: 1000,
  }
};