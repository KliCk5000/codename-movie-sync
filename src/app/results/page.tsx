export const dynamic = 'force-dynamic';

import { searchMovies } from '@/lib/tmdb';
import Image from 'next/image';
import Link from 'next/link';

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string;
}

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>;
}) {
  const { title = '' } = await searchParams;

  if (!title.trim()) {
    return (
      <p className="text-lg">Please enter a title on the home page first.</p>
    );
  }

  let movies: Movie[] = [];
  try {
    movies = await searchMovies(title);
    if (!Array.isArray(movies)) movies = [];
  } catch (e: unknown) {
    let message = 'Unknown error';
    if (e instanceof Error) {
      message = e.message;
    }
    return (
      <p className="text-red-500">
        Error fetching results. Please try again later. ${message}
      </p>
    );
  }

  if (!movies.length) {
    return <p>No matches for &quot;{title}&quot;.</p>;
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">
        {movies.length} results for &quot;{title}&quot;
      </h2>
      <ul className="space-y-2">
        {movies.map(({ id, poster_path, title: movieTitle, release_date }) => (
          <li
            key={id}
            className="rounded border border-neutral-700 p-3 hover:bg-neutral-800"
          >
            <Link href={`/movie/${id}`} className="">
              {poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  width={300}
                  height={450}
                  alt={movieTitle}
                  className="mb-2 h-auto w-2xs rounded"
                />
              )}
              <h3>{movieTitle}</h3>
              <span className="text-sm text-neutral-400">({release_date})</span>
            </Link>
            <Link
              href={`https://www.themoviedb.org/movie/${id}`}
              target="_blank"
              className="mt-2 inline-block text-amber-400 underline"
            >
              View on TMDB
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
