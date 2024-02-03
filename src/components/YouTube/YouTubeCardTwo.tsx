import NoImage from "../../assets/no-image.jpg";
import { SlOptionsVertical } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { FC } from 'react';

interface Props {
  /**
   * Title of the video
   */
  title: string;
  /**
   * Number of views
   */
  views: number;
  /**
   * Image of the video
   */
  image: string;
  /**
   * Artist of the video
   */
  artist: string;
}

export const YouTubeCardTwo: FC<Props> = ( { title, views, image, artist } ) => {
  return (
    <div className="bg-black w-fit p-4">
      <figure className="w-[400px] relative group">
        <SlOptionsVertical color="white" className="absolute right-3 top-3 opacity-0 group-hover:opacity-100" />
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-4/5 ">
          <FaPlay color="white" className="absolute size-11" />
        </div>
        <img src={ image ? image : NoImage } alt="" className="object-cover w-[400px] h-[225px] group-hover:opacity-30" />
        <figcaption className="text-white mt-1">
          <p className="font-medium">
            { title }
          </p>
          <p>
            <span className="hover:underline underline-offset-2">{ artist }</span> • { views } visualizaciones
          </p>
        </figcaption>
      </figure>
    </div>
  );
};