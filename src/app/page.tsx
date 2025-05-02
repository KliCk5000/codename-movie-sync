'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-3xl font-semibold">Which movie should we watch?</h1>
      <input
        className="mt-2 mb-2 w-64 rounded border border-neutral-700 p-2 dark:bg-neutral-200 dark:text-neutral-900"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && router.push('/results')}
      />
      <button
        onClick={() => router.push('/results')}
        className="rounded bg-amber-500 px-4 py-2 font-medium hover:bg-amber-600"
      >
        Search
      </button>
    </main>
  );
}
