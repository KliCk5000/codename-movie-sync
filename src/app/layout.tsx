import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="">
        <header className="p-4 text-3xl font-bold">
          <span className="inline-flex items-center">
            <Image
              src="/Logo1-sm.png"
              width={270}
              height={195}
              alt="MovieSync Logo"
              className="mr-2 h-auto max-w-[50px]"
            />{' '}
            MovieSync
          </span>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="p-4 text-center text-sm">
          Built with Next.js, Tailwind CSS, and TypeScript.
        </footer>
        <p className="mx-auto max-w-2xl text-center text-sm text-gray-600 dark:text-gray-400"></p>
      </body>
    </html>
  );
}
