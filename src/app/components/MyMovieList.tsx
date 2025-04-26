'use client';

import Image from 'next/image';

export default function MyMovieList({
  movies,
}: {
  movies: {
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
  }[];
}) {
  if (!movies.length) return null;

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-semibold">My Watchlist</h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="relative aspect-[2/3] bg-gray-200 dark:bg-gray-700">
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400 dark:text-gray-500">
                  No poster
                </div>
              )}
            </div>
            <div className="p-2">
              <h3 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {movie.release_date?.split('-')[0]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
