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

      {/* <div className="mx-auto mb-2 flex flex-col items-center justify-center text-center">
        <h1 className="mt-10 mb-4 text-center text-3xl font-bold">MovieSync</h1>
        <p className="mb-10 max-w-80 text-lg">
          Welcome! This is a personal project to track and share movie
          watchlists with friends.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/Logo1.png"
          alt="MovieSync Logo"
          width={423}
          height={320}
          className="mb-10 h-auto w-auto max-w-[400px]"
        />
        <Link href="/login">
          <button className="mb-10 cursor-pointer rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </div> */}
    </main>
  );
}
