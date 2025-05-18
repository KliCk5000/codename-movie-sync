import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getMovieDetails, TMDB_MovieDetails } from '@/lib/tmdb';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: TMDB_MovieDetails = await getMovieDetails(id);

  return (
    <div className='max-w-3xl mx-auto p-4 backdrop-brightness-200'>
      <Link href="/" className="mb-4 inline-block text-amber-400 underline">
        &larr; Back to search
      </Link>
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={300}
          height={450}
          alt={movie.title}
          className="mb-2 h-auto w-2xs rounded"
        />
      )}
      <div>ID: {movie.id}</div>
      <div>Title: {movie.title}</div>
      <div>Status: {movie.status}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Overview: {movie.overview}</div>
      <div>Runtime: {movie.runtime}</div>
    </div>
  );
}

/*

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

*/
