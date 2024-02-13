import { Meta, StoryObj } from '@storybook/react';
import { SpotifyPlaylistCard } from '../components/Spotify/SpotifyPlaylistCard';

const meta = {
  title: 'Spotify/Cards/Playlist Card',
  component: SpotifyPlaylistCard,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof SpotifyPlaylistCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
};