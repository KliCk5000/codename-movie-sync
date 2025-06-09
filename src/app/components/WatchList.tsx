'use client';
import MovieCard from './MovieCard';

export default function WatchList({
  movies,
}: {
  movies: {
    id: number;
    title: string;
    poster_path?: string;
    release_date?: string;
    reaction: string;
  }[];
}) {
  //if (!movies.length) return null;

  console.log(movies);

  return (
    <div className="border-1 border-amber-500">
      <div className="border">Watchlist</div>
      <div className="no-scrollbar flex space-x-4 overflow-x-auto pb-2">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} onAdd={() => {}} />
        ))}
      </div>
    </div>
  );
}
