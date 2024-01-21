import { FC } from 'react';
import styles from '../../styles/youTubeCardOne.module.css';
import noImage from '../../assets/no-image.jpg';
import { SlOptionsVertical } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";

interface Props {
  /**
    * The image to display in the card
    */
  image?: string;
  /**
 * The data of the song to display in the card
 */
  dataSong: {
    title: string;
    artist: string;
    type: 'Song' | 'Soundtrack' | 'Cover';
  };

}

export const YouTubeCardOne: FC<Props> = ( { image, dataSong = { artist: 'Tame Impala', title: 'Is It True', type: 'Song' } } ) => {
  return (
    <div className={ styles[ 'card' ] }>
      <figure className={ styles[ 'card__figure' ] }>
        <SlOptionsVertical color="white" className={ styles[ 'card__options' ] } onClick={ () => console.log( "Click Options" ) } />
        <FaPlay color="white" className={ styles[ 'card__play' ] } onClick={ () => console.log( "Click Play" ) } />
        <img src={ image ? image : noImage } className={ styles[ 'card__image' ] } alt="song-image" />
      </figure>
      <div className={ styles[ 'card__text' ] }>
        <p className={ styles[ 'card__title' ] }>
          { dataSong.title }
        </p>
        <p className={ styles[ 'card__description' ] }>
          { dataSong.type } •
          <a href="#">
            { dataSong.artist }
          </a>
        </p>
      </div>
    </div>
  );
};