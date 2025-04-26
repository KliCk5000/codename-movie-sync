'use client';

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import MyMovieList from "../components/MyMovieList";

export default function MyMoviesPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [myMovies, setMyMovies] = useState<{ id: number; title: string; poster_path?: string; release_date?: string; reaction: string }[]>([]);

  const handleSearch = async (query: string) => {
    const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
        
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      console.error('API Error:', await res.text());
      return;
    }
    
    const data = await res.json();
    setSearchResults(data.results);
  };

  const clearResults = () => {
    setSearchResults([]);
  };

  const addMovie = (movie: { id: number; title: string; poster_path?: string; release_date?: string }) => {
    const alreadyAdded = myMovies.some((m) => m.id === movie.id);
    if (!alreadyAdded) {
      setMyMovies((prev) => [...prev, { ...movie, reaction: 'excited' }]);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">MovieSync</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} onAdd={addMovie} onClear={clearResults} />
      <MyMovieList movies={myMovies} />
    </main>
  )
}
