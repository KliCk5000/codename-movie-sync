import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import supabase from '@/lib/supabase';

export async function GET() {
  // Get current Clerk userId (using Clerk's API)
  const { userId } = await auth();

  // If not logged in, return 401 Unauthorized
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Fetch saved movies for this user
  const { data, error } = await supabase
    .from('saved_movies')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  // Return success or error
  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}
