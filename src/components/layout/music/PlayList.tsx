import { Play, MoreHorizontal } from 'lucide-react';

interface PlaylistProps {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songCount: number;
  duration: string;
}

const Playlist = ({
  name,
  description,
  coverUrl,
  songCount,
  duration
}: PlaylistProps) => {
  return (
    <div className="group bg-gray-800/40 rounded-lg p-4 hover:bg-gray-700/40 transition-colors">
      <div className="relative mb-4">
        <img
          src={coverUrl}
          alt={name}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
        />
        <button className="absolute bottom-4 right-4 bg-primary-400 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 transform">
          <Play className="w-6 h-6 text-white" fill="white" />
        </button>
      </div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>
        <button className="text-gray-400 hover:text-white p-2">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      <div className="flex text-gray-400 text-sm">
        <span>{songCount} songs</span>
        <span className="mx-2">•</span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default Playlist;