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
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <div className="relative" style={{ paddingTop: '150%' }}>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title} poster`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="absolute inset-0 object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500">
            No poster available
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="mb-1 line-clamp-2 text-lg font-medium text-gray-900 dark:text-white">
          {movie.title}
        </h4>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {movie.release_date?.split('-')[0]}
        </p>
        <button
          onClick={() => onAdd(movie)}
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
        >
          I&apos;m excited!
        </button>
      </div>
    </div>
  );
}
