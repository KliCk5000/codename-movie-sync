const BASEURL = process.env.TMDB_API_BASE_URL;

const HEADERS = {
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    Accept: 'application/json',
  },
  next: { revalidate: 60 }, // Cache for 60 seconds
};

export interface TMDB_SearchedMovie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

export interface TMDB_MovieDetails {
  id: number;
  title: string;
  status?: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
  vote_average?: number;
  budget?: number;
  revenue?: number;
}

export async function searchMovies(
  title: string,
): Promise<TMDB_SearchedMovie[]> {
  const url = new URL('search/movie', BASEURL);
  url.searchParams.set('query', title);
  url.searchParams.set('include_adult', 'false');
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('page', '1');

  const res = await fetch(url.toString(), HEADERS);

  if (!res.ok)
    throw new Error(`TMDB request failed (${res.status}): ${res.statusText}`);
  const json = await res.json();
  return json.results as TMDB_SearchedMovie[];
}

export async function getMovieDetails(id: string): Promise<TMDB_MovieDetails> {
  const url = new URL(`movie/${id}`, BASEURL);

  const res = await fetch(url.toString(), HEADERS);

  if (!res.ok)
    throw new Error(`TMDB request failed (${res.status}): ${res.statusText}`);
  const json = await res.json();
  return json as TMDB_MovieDetails;
}
