import { useState } from 'react';

interface PlaylistData {
  id: string;
  name: string;
  description: string;
}

const LibraryPage = () => {
  // Datos simulados de playlists guardadas por el usuario
  const [playlists] = useState<PlaylistData[]>([
    { id: '1', name: 'Top Hits 2024', description: 'The biggest hits of 2024' },
    { id: '2', name: 'Chill Vibes', description: 'Relax and unwind with these chill beats' },
    { id: '3', name: 'Rock Classics', description: 'The best of classic rock' },
    { id: '4', name: 'Jazz Essentials', description: 'Smooth jazz tunes to relax' },
    // Agrega más playlists aquí si deseas
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Your Library</h2>
      <div className="text-gray-400">
        {playlists.length > 0 ? (
          playlists.map(playlist => (
            <div key={playlist.id} className="p-4 mb-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-bold text-white">{playlist.name}</h3>
              <p className="text-gray-400">{playlist.description}</p>
            </div>
          ))
        ) : (
          <p>No playlists saved.</p>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
