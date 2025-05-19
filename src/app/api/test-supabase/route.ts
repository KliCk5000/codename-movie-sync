import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('saved_movies')
    .select('*')
    .limit(10); // Limit for sanity

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}