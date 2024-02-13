import { FaPlay } from "react-icons/fa";


export const SpotifyPlaylistCard = () => {
  return (
    <div className="bg-black p-4">
      <div className="w-181 p-4 rounded-xl group bg-spotify-black hover:bg-spotify-gray transition-colors duration-300">
        <div className="size-36 relative mb-4">
          <img src="https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037" alt="playlist image" />
          <span className="absolute bottom-0 right-3 opacity-0 group-hover:-translate-y-3 group-hover:opacity-100 transition-all duration-300">
            <div className="flex justify-center items-center bg-spotify-green p-3 rounded-full">
              <FaPlay color="black" className="text-xl " />
            </div>
          </span>
        </div>
        <span className="text-white">
          <p className="font-medium">Title</p>
          <p className="text-sm">Description</p>
        </span>
      </div>
    </div>
  );
};