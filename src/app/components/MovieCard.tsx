'use client';

import Image from 'next/image';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
  };
  onAdd: (movie: {
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
  }) => void;
}

export default function MovieCard({ movie, onAdd }: MovieCardProps) {
  return (
    <div className="flex flex-col min-w-[110px] max-w-[110px] bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative w-full aspect-[2/3] bg-gray-100 dark:bg-gray-700">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={`${movie.title} poster`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 dark:text-gray-500">
            No poster
          </div>
        )}
      </div>
      <div className="flex flex-col p-2">
        <h4 className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">{movie.title}</h4>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">{movie.release_date?.split('-')[0]}</p>
        <button
          onClick={() => onAdd(movie)}
          className="mt-auto w-full rounded bg-amber-500 hover:bg-amber-600 text-white py-1 text-xs font-medium"
        >
          Add
        </button>
      </div>
    </div>
  );
}

