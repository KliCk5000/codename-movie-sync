'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const { user } = useUser();

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-3xl font-semibold">
        Hey{user?.firstName ? ' ' + user?.firstName : null}, which movie should
        we watch?
      </h1>
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
        className="rounded bg-amber-500 px-4 py-2 font-medium hover:bg-amber-600"
      >
        Search
      </button>
    </main>
  );
}
