import '../globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { ClerkProvider } from '@clerk/nextjs';

import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'MovieSync',
  description: 'Sync your favorite movies with your friends.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <main className="container mx-auto p-2">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Built with Next.js, Tailwind CSS, and TypeScript.
        </footer>
      </ThemeProvider>
    </ClerkProvider>
  );
}
