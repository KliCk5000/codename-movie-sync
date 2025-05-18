'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function PosterWithFallback({
  src,
  alt,
}: {
  src: string | null;
  alt: string;
}) {
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onerror = () => setImgError(true);
    }
  }, [src]);

  if (!src || imgError) {
    // You can use a box or a placeholder image
    return (
      <div className="flex h-[450px] w-[300px] items-center justify-center rounded bg-neutral-800 text-neutral-400 shadow-md">
        No poster available
      </div>
    );
  }

  // Pass the ref to the underlying img element rendered by next/image
  return (
    <Image
      ref={imgRef}
      src={src}
      width={300}
      height={450}
      alt={alt}
      className="w-320 rounded shadow-md"
      unoptimized // Optional: disables Next.js image optimizations if you're using external URLs
    />
  );
}
