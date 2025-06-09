import React from 'react';
import Link from 'next/link';

import { getMovieDetails, TMDB_MovieDetails } from '@/lib/tmdb';
import PosterWithFallback from '@/app/components/PosterWithFallback';
import SaveMovieButton from '@/app/components/SaveMovieButton';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: TMDB_MovieDetails = await getMovieDetails(id);
  const convertedDate = new Date(movie.release_date).toLocaleDateString(
    'en-US',
  );

  return (
    <div className="mx-auto max-w-3xl p-4">
      <Link href="/home" className="mb-4 inline-block text-amber-400 underline">
        &larr; Back to search
      </Link>
      <div className="flex flex-col gap-6 md:flex-row">
        <div id="poster">
          <PosterWithFallback
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : null
            }
            alt={movie.title}
          />
          <SaveMovieButton movie={movie} />
        </div>
        <div id="info" className="">
          <h1 className="mb-1 text-3xl font-bold">{movie.title}</h1>
          {movie.tagline && (
            <div className="mb-2 text-lg text-neutral-400 italic">
              {movie.tagline}
            </div>
          )}
          {movie.status && (
            <div className="mb-3 space-x-2 text-sm text-neutral-500">
              {movie.status}
            </div>
          )}
          {movie.release_date && (
            <div className="mb-3 space-x-2 text-sm text-neutral-500">
              Release Date: {convertedDate}
            </div>
          )}
          {movie.runtime && (
            <div className="mb-3 space-x-2 text-sm text-neutral-500">
              Runtime: {movie.runtime} minutes
            </div>
          )}
          {movie.genres && movie.genres.length > 0 && (
            <div className="mb-3 space-x-2 text-sm text-neutral-500">
              {movie.genres.map((g) => g.name).join(', ')}
            </div>
          )}
          <div className="mb-4">Overview: {movie.overview}</div>
          {movie.vote_average && (
            <div className="font-semibold">
              Average voted score from TMDB: {movie.vote_average}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/*

export interface TMDB_MovieDetails {
  id: number;
  title: string;
  status?: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
  vote_average?: number;
  budget?: number;
  revenue?: number;
}

+---------------------------------------------------------------+
| ← Back to search                                              |
|                                                               |
| +----------------------+  +-------------------------------+   |
| | [Poster Image]       |  | Movie Title (large, bold)     |   |
| |                      |  | Tagline (italic, lighter)     |   |
| |                      |  |                               |   |
| |                      |  | Release Date  •  Runtime      |   |
| +----------------------+  | Status   •   Genres           |   |
|                           |                               |   |
|                           | Overview / Description        |   |
|                           |                               |   |
|                           | [Optional: TMDB Rating ⭐️]    |   |
|                           |                               |   |
|                           +-------------------------------+   |
+---------------------------------------------------------------+


*/
