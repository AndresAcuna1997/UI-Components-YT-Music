import { YouTubeCardOne } from './components/YouTube/YouTubeCardOne';
import { YouTubeLabelCategory } from './components/YouTube/YouTubeLabelCategory';
import { YouTubeArtistMini } from './components/YouTube/YouTubeArtistMini';

function App() {

  return (
    <>
      <h4>Card #1</h4>
      <YouTubeCardOne
        dataSong={ {
          title: 'Is It True',
          artist: 'Tame Impala',
          type: 'Song'
        } } />

      <h4>Category Label</h4>
      <YouTubeLabelCategory label='Relajacion' />

      <h4>Artist</h4>
      <YouTubeArtistMini />
    </>
  );
}

export default App;
