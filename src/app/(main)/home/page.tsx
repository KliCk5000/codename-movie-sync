'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import WatchList from '@/app/components/WatchList';
import { data } from '@/app/components/mock-list.json';

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const { user, isLoaded, isSignedIn } = useUser();
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const fetchMyMovies = async () => {
      try {
        const res = await fetch('/api/my-movies');
        if (!res.ok) throw new Error('Failed to fetch');
        const { data } = await res.json();
        setMyMovies(data);
      } catch (err) {
        console.error(err);
      }
    };

    // Only redirect if Clerk is loaded and user is NOT signed in
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }

    if (isLoaded && isSignedIn) {
      fetchMyMovies();
    }
  }, [isLoaded, isSignedIn, router]);

  // Optionally: Show nothing until Clerk finishes loading
  if (!isLoaded) return null;

  console.log(myMovies);

  return (
    <>
      <main className="flex flex-col items-center p-4">
        <WatchList
          movies={data.map((item) => ({
            id: item.movie_id,
            title: item.movie_title,
            poster_path: item.poster_path,
            reaction: 'unrated',
          }))}
        />
        <p className="text-2xl font-semibold">
          Hey{user?.firstName ? ' ' + user?.firstName : null}, which movie
          should we watch?
        </p>
        <input
          aria-label="Movie search"
          className="mt-2 mb-2 w-64 rounded border border-neutral-700 p-2 dark:bg-neutral-200 dark:text-neutral-900"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' &&
            router.push(`/results?title=${encodeURIComponent(query)}`)
          }
        />
        <button
          disabled={!query.trim()}
          onClick={() =>
            router.push(`/results?title=${encodeURIComponent(query)}`)
          }
          className="w-64 rounded-full bg-amber-500 px-4 py-2 font-medium hover:bg-amber-600"
        >
          Search
        </button>
      </main>
    </>
  );
}
