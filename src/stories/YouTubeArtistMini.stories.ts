import { Meta, StoryObj } from '@storybook/react';
import { YouTubeArtistMini } from '../components/YouTube/YouTubeArtistMini';

const meta = {
  title: 'YouTube/Cards/YouTubeArtistMini',
  component: YouTubeArtistMini,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof YouTubeArtistMini>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    artistImage:'',
    artistName:'Gorillaz',
    artistViews:'3.4 M',
  }
};