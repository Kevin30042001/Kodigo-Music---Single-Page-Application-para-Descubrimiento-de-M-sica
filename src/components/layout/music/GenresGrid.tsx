const genres = [
    {
      id: '1',
      name: 'Hip Hop',
      color: 'from-yellow-500 to-red-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592580/hiphop_oh8h2y.jpg'
    },
    {
      id: '2',
      name: 'Rock',
      color: 'from-purple-500 to-pink-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592579/rock_prz4ci.jpg'
    },
    {
      id: '3',
      name: 'Electronic',
      color: 'from-blue-500 to-teal-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592580/electronica_hqlpjw.jpg'
    },
    {
      id: '4',
      name: 'Jazz',
      color: 'from-indigo-500 to-green-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730592580/jazz_s84pmw.jpg'
    },
    {
      id: '5',
      name: 'Classical',
      color: 'from-gray-500 to-gray-800',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593339/classical_q8d8nw.jpg'
    },
    {
      id: '6',
      name: 'Pop',
      color: 'from-pink-500 to-purple-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593341/pop_wenaxy.jpg'
    },
    {
      id: '7',
      name: 'Reggae',
      color: 'from-green-500 to-yellow-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593338/reggae_mcx4jz.jpg'
    },
    {
      id: '8',
      name: 'Blues',
      color: 'from-blue-500 to-indigo-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593338/blues_tbk9a4.jpg'
    },
    {
      id: '9',
      name: 'Country',
      color: 'from-yellow-700 to-yellow-500',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593337/country_gtj6cl.jpg'
    },
    {
      id: '10',
      name: 'R&B',
      color: 'from-gray-700 to-purple-800',
      imageUrl: 'https://res.cloudinary.com/dfnm112ae/image/upload/v1730593337/r_b_z16vt6.jpg'
    }
    // Añade más géneros según necesites
];

const GenresGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
        >
          <img
            src={genre.imageUrl}
            alt={genre.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-60`} />
          <div className="absolute inset-0 flex items-end p-4">
            <h3 className="text-white text-xl font-bold">{genre.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenresGrid;
