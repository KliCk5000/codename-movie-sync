'use client';

import React from 'react';
import { SignedIn, SignInButton, SignedOut, useUser } from '@clerk/nextjs';
import { TMDB_MovieDetails } from '@/lib/tmdb';

export default function SaveMovieButton({
  movie,
}: {
  movie: TMDB_MovieDetails;
}) {
  const { user } = useUser();

  // Save Handler
  const handleSaveMovie = async () => {
    if (!user) return; // for extra safety
    console.log('Saving movie for user: ', user, movie);
    // TODO: call API/server action here
    try {
      const res = await fetch('/api/save-movie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movie: {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
          },
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        // Show success (e.g., set a local state “Saved!”)
      } else {
        // Show error (e.g., data.error)
      }
    } catch (error) {
      // Handle fetch/network error
      return console.log(error);
    }
  };

  return (
    <div>
      <SignedIn>
        <button
          aria-label="Save this movie"
          className="mt-4 rounded bg-amber-500 px-4 py-2 font-medium hover:bg-amber-600"
          onClick={handleSaveMovie}
        >
          Save this movie {user?.firstName ? user?.firstName : ''}
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton /> to save this movie!
      </SignedOut>
    </div>
  );
}
