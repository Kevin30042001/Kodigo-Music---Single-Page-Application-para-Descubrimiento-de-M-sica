export const CLOUDINARY_CLOUD_NAME = 'tu-cloud-name'; // Reemplaza con tu cloud name

export const getCloudinaryUrl = (publicId: string, transformation: string = '') => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformation}/${publicId}`;
};

// URLs de ejemplo de imágenes de música (reemplaza con tus propias imágenes en Cloudinary)
export const MUSIC_IMAGES = {
  artists: {
    artist1: getCloudinaryUrl('music-app/artists/artist1'),
    artist2: getCloudinaryUrl('music-app/artists/artist2'),
    artist3: getCloudinaryUrl('music-app/artists/artist3'),
  },
  albums: {
    album1: getCloudinaryUrl('music-app/albums/album1'),
    album2: getCloudinaryUrl('music-app/albums/album2'),
    album3: getCloudinaryUrl('music-app/albums/album3'),
  },
  playlists: {
    playlist1: getCloudinaryUrl('music-app/playlists/playlist1'),
    playlist2: getCloudinaryUrl('music-app/playlists/playlist2'),
  }
};