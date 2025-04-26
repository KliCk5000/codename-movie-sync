'use client';
import Image from 'next/image';
import MovieCard from './MovieCard';

interface SearchResultsProps {
  results: Array<{
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
  }>;
  onAdd: (movie: any) => void;
  onClear: () => void;
}

export default function SearchResults({ results, onAdd, onClear }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Search Results</h2>
        <button
          onClick={onClear}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear results
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}
