import { NextResponse } from 'next/server';
import { searchMovies } from '@/lib/tmdb';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title')?.trim();

  if (!title)
    return NextResponse.json({ error: 'No title provided' }, { status: 400 });

  try {
    const movieData = await searchMovies(title);
    return NextResponse.json({ results: movieData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch movie data. Upstream Failure.' },
      { status: 502 },
    );
  }
}
