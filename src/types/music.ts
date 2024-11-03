export interface Song {
    id: string;
    title: string;
    artist: string;
    album: string;
    coverUrl: string;
    duration: string;
    audioUrl: string;
  }
  
  export interface Playlist {
    id: string;
    name: string;
    description: string;
    songs: Song[];
    coverUrl: string;
  }
  
  // src/types/user.ts
  export interface User {
    id: string;
    name: string;
    email: string;
    playlists: string[]; // playlist IDs
  }