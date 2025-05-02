import { NextResponse } from 'next/server';
import { searchMovies } from '@/lib/tmdb';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('title')?.trim();
  if (!query) {
    return NextResponse.json({ error: 'Missing title param' }, { status: 400 });
  }

  try {
    const data = await searchMovies(query);
    return NextResponse.json({ results: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Upstream failure' }, { status: 500 });
  }
}
