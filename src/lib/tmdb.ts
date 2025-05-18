const BASEURL = process.env.TMDB_API_BASE_URL;

export interface TMDB_SearchedMovie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

export async function searchMovies(
  title: string,
): Promise<TMDB_SearchedMovie[]> {
  const url = new URL('search/movie', BASEURL);
  url.searchParams.set('query', title);
  url.searchParams.set('include_adult', 'false');
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('page', '1');

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      Accept: 'application/json',
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  console.log(url.toString(), BASEURL);

  if (!res.ok) throw new Error('TMDB request failed');
  const json = await res.json();
  return json.results as TMDB_SearchedMovie[];
}
