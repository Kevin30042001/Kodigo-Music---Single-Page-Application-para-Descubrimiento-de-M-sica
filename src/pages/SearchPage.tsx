import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface SearchFormData {
  searchTerm: string;
}

// Datos simulados de canciones o playlists para buscar
const sampleData = [
  { id: '1', name: 'Top Hits 2024' },
  { id: '2', name: 'Chill Vibes' },
  { id: '3', name: 'Hip Hop Classics' },
  { id: '4', name: 'Rock Anthems' },
  { id: '5', name: 'Electronic Essentials' },
  { id: '6', name: 'Jazz Relaxation' },
  { id: '7', name: 'Pop Hits' },
  // Agrega más elementos según necesites
];

const SearchPage = () => {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const [results, setResults] = useState<typeof sampleData>([]); // Estado para almacenar los resultados de búsqueda
  const [noResults, setNoResults] = useState(false); // Estado para controlar si no hay resultados

  const onSubmit = (data: SearchFormData) => {
    const searchTerm = data.searchTerm.toLowerCase();
    // Filtrar los datos simulados en función del término de búsqueda
    const filteredResults = sampleData.filter(item => 
      item.name.toLowerCase().includes(searchTerm)
    );

    setResults(filteredResults); // Actualizar los resultados de búsqueda
    setNoResults(filteredResults.length === 0); // Controlar si no hay resultados
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Search Music</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <input
          {...register('searchTerm', { required: true })}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Search for songs, artists, or albums..."
        />
        <button type="submit" className="mt-2 p-2 bg-primary-500 text-white rounded">
          Search
        </button>
      </form>

      {/* Mostrar resultados de búsqueda */}
      <div className="text-white">
        {noResults ? (
          <p>No results found</p>
        ) : (
          results.map(result => (
            <div key={result.id} className="p-2 border-b border-gray-700">
              {result.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
