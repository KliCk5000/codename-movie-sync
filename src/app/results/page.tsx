import { mockMovies } from '@/lib/mock-movies';

export default function ResultsPage() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Search results (mock)</h2>
      <ul className="space-y-2">
        {mockMovies.map(m => (
          <li
            key={m.id}
            className="rounded border border-neutral-700 p-3 hover:bg-neutral-800"
          >
            {m.title} <span className="text-sm text-neutral-400">({m.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
