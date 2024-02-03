import { FC } from 'react';
import defaultImage from "../../assets/artits.jpg";
import styles from "../../styles/youTubeArtistMini.module.css";

interface Props {
  artistName: string;
  artistViews: string;
  artistImage: string;
}

export const YouTubeArtistMini: FC<Props> = ( { artistName, artistViews, artistImage } ) => {
  return (
    <figure className={ styles[ 'artist-card' ] }>
      <img className={ styles[ 'artits-image' ] } src={ artistImage ? artistImage : defaultImage } alt="artits-image" />
      <figcaption>
        <p className={ styles[ 'artist-name' ] }>{ artistName }</p>
        <p className={ styles[ 'artist-views' ] }>{ artistViews } de suscriptores</p>
      </figcaption>
    </figure>
  );
};
