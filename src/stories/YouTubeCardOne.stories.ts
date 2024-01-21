import { Meta, StoryObj } from '@storybook/react';
import { YouTubeCardOne } from '../components/YouTube/YouTubeCardOne';

const meta = {
  title: 'YouTube/Cards/YouTubeCardOne',
  component: YouTubeCardOne,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof YouTubeCardOne>;


export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    image: 'https://lh3.googleusercontent.com/NyzedsOoL8vWtdUH41_k3cpbu9mxFnRD6pUbLPdWrOfQ4SKKVYnzHEymGkLj0NLEJW_75jdb6jlETO_5=w226-h226-l90-rj',
    dataSong: {
      title: 'Resonance',
      artist: 'Home',
      type: 'Song'
    }
  }
};


