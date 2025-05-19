import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import supabase from '@/lib/supabase';

export async function POST(req: Request) {
  // 1. Parse request body for movie info
  const { movie } = await req.json();

  // 2. Get current Clerk userId (using Clerk's API)
  const { userId } = await auth();

  // 3. If not logged in, return 401 Unauthorized
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  // Structure my data to be inserted
  const row = {
    user_id: userId,
    movie_id: movie.id,
    movie_title: movie.title,
    poster_path: movie.poster_path,
  };

  console.log('Row to insert:', row);

  // 4. Insert into Supabase table with userId and movie info
  const { data, error } = await supabase.from('saved_movies').insert([row]);

  // 5. Return success or error
  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}
