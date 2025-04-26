'use client';

import { useState } from 'react';

export default function SearchBar({
  onSearch,
}: {
  onSearch: (q: string) => void;
}) {
  const [query, setQuery] = useState('');

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(query);
          }
        }}
        className="mr-2 rounded border p-2"
      />
      <button
        onClick={() => onSearch(query)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Search
      </button>
    </div>
  );
}
