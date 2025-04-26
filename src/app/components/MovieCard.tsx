'use client';

import Image from 'next/image';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
  };
  onAdd: (movie: { id: number; title: string; poster_path?: string; release_date?: string }) => void;
}

export default function MovieCard({ movie, onAdd }: MovieCardProps) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="relative" style={{ paddingTop: '150%' }}>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title} poster`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover absolute inset-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500">
            No poster available
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1 line-clamp-2">
          {movie.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {movie.release_date?.split('-')[0]}
        </p>
        <button
          onClick={() => onAdd(movie)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          I&apos;m excited!
        </button>
      </div>
    </div>
  );
} 