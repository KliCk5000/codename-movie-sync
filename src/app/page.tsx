import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col p-4">
      <div className="mx-auto mb-2 flex flex-col items-center justify-center text-center">
        <h1 className="mt-10 mb-4 text-center text-3xl font-bold">MovieSync</h1>
        <p className="mb-10 max-w-80 text-lg">
          Welcome! This is a personal project to track and share movie
          watchlists with friends.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/Logo1.png"
          alt="MovieSync Logo"
          width={423}
          height={320}
          className="mb-10 h-auto w-auto max-w-[400px]"
        />
        <Link href="/login">
          <button className="mb-10 cursor-pointer rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-600">
            Get Started
          </button>
        </Link>
        <p className="mx-auto max-w-2xl text-center text-sm text-gray-600 dark:text-gray-400">
          Built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </div>
    </main>
  );
}
