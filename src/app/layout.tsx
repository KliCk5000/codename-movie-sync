import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { ClerkProvider } from '@clerk/nextjs';

import Header from './components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MovieSync',
  description: 'Sync your favorite movies with your friends.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <body className="">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="container mx-auto p-4">{children}</main>
            <footer className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
              Built with Next.js, Tailwind CSS, and TypeScript.
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
