import defaultImage from "../../assets/artits.jpg";
import styles from "../../styles/youTubeArtistMini.module.css";

export const YouTubeArtistMini = () => {
  return (
    <figure className={ styles[ 'artist-card' ] }>
      <img className={ styles[ 'artits-image' ] } src={ defaultImage } alt="artits-image" />
      <figcaption>
        <p className={styles['artist-name']}>Gorillaz</p>
        <p className={styles['artist-views']}>2,5 M de suscriptores</p>
      </figcaption>
    </figure>
  );
};