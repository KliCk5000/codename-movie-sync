import { searchMovies } from '@/lib/tmdb';
import Image from 'next/image';
import Link from 'next/link';

export default async function Results({
  searchParams,
}: {
  searchParams: { title?: string };
}) {
  const title = searchParams.title ?? '';

  if (!title) {
    return (
      <p className="text-lg">Please enter a title on the home page first.</p>
    );
  }

  const movies = await searchMovies(title);

  if (!movies.length) {
    return <p>No matches for &quot;{title}&quot;.</p>;
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">
        {movies.length} results for &quot;{title}&quot;
      </h2>
      <ul className="space-y-2">
        {movies.map((m) => (
          <li
            key={m.id}
            className="rounded border border-neutral-700 p-3 hover:bg-neutral-800"
          >
            {m.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                width={300}
                height={450}
                alt={m.title}
                className="mb-2 h-auto w-full rounded"
              />
            )}
            <h3 className="">{m.title}</h3>
            <span className="text-sm text-neutral-400">({m.release_date})</span>

            <Link
              href={`https://www.themoviedb.org/movie/${m.id}`}
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
