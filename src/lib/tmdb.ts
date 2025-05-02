const BASEURL = 'https://api.themoviedb.org/3';

export interface TMDBSearchMovie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

export async function searchMovies(title: string): Promise<TMDBSearchMovie[]> {
  const url = new URL('/search/movie', BASEURL);
  url.searchParams.set('query', title);
  url.searchParams.set('include_adult', 'false');
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('page', '1');

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      Accept: 'application/json',
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!res.ok) throw new Error('TMDB request failed');
  const json = await res.json();
  return json.results as TMDBSearchMovie[];
}
