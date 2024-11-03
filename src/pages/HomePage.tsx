import { useState } from 'react';
import MusicPlayer from '../components/layout/player/MusicPlayer';
import Playlist from '../components/layout/music/PlayList';
import GenresGrid from '../components/layout/music/GenresGrid';
import { MUSIC_IMAGES } from '../config/cloudinary';

const HomePage = () => {
  const [featuredPlaylists] = useState([
    {
      id: '1',
      name: 'Top Hits 2024',
      description: 'The biggest hits of the year, refreshed daily',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592579/rock_prz4ci.jpg',
      songCount: 50,
      duration: '2h 45m'
    },
    {
      id: '2',
      name: 'Chill Vibes',
      description: 'Relaxing beats for your peaceful moments',
      coverUrl:'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592580/jazz_s84pmw.jpg',
      songCount: 40,
      duration: '2h 15m'
    },
    {
      id: '3',
      name: 'Workout Mix',
      description: 'Energetic beats to keep you moving',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593337/country_gtj6cl.jpg',
      songCount: 60,
      duration: '3h 20m'
    },
    {
      id: '4',
      name: 'Focus Flow',
      description: 'Stay focused with calm beats',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593341/pop_wenaxy.jpg',
      songCount: 35,
      duration: '1h 45m'
    },
    {
      id: '5',
      name: 'Rock Anthems',
      description: 'The best of classic rock',
      coverUrl:'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592580/electronica_hqlpjw.jpg',
      songCount: 55,
      duration: '2h 50m'
    },
    {
      id: '6',
      name: 'Jazz Vibes',
      description: 'Smooth jazz to relax and unwind',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593339/classical_q8d8nw.jpg',
      songCount: 45,
      duration: '2h 10m'
    },
    {
      id: '7',
      name: 'Pop Hits',
      description: 'The latest hits in pop music',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592579/rock_prz4ci.jpg',
      songCount: 50,
      duration: '2h 30m'
    },
    {
      id: '8',
      name: 'Classic Memories',
      description: 'A collection of timeless classics',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593337/r_b_z16vt6.jpg',
      songCount: 30,
      duration: '1h 50m'
    },
    {
      id: '9',
      name: 'Electronic Essentials',
      description: 'Must-have tracks for electronic fans',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592580/hiphop_oh8h2y.jpg',
      songCount: 70,
      duration: '3h 15m'
    },
    {
      id: '10',
      name: 'Relaxing Acoustic',
      description: 'Soft acoustic sounds for relaxing',
      coverUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593338/blues_tbk9a4.jpg',
      songCount: 25,
      duration: '1h 20m'
    }

  ]);

  return (
    <>
      <div className="pb-24">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to Kodigo Music
          </h1>
          <p className="text-gray-400 text-lg">Discover your next favorite song</p>
        </section>

        {/* Featured Playlists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredPlaylists.map((playlist) => (
              <Playlist key={playlist.id} {...playlist} />
            ))}
          </div>
        </section>

        {/* Genres Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Genre</h2>
          <GenresGrid />
        </section>
      </div>

      {/* Fixed Music Player */}
      <MusicPlayer />
    </>
  );
};

export default HomePage;
