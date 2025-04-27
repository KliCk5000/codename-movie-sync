'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const buttonClasses =
    'text-1xl ml-2 min-h-[30px] min-w-[30px] rounded ' +
    'bg-gray-200 p-2 text-gray-800 ' +
    'dark:bg-gray-700 dark:text-gray-200';

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button aria-label="Toggle theme" className={buttonClasses} />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={buttonClasses}
    >
      {resolvedTheme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
