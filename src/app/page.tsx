import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-4 flex flex-col">
      <div className="mb-2 text-center mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center">MovieSync</h1>
        <p className="text-lg max-w-80 mb-10">
          Welcome! This is a personal project to track and share movie watchlists with friends.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image 
          src="/logo1.png" 
          alt="MovieSync Logo" 
          width={423} 
          height={320} 
          className="w-auto h-auto max-w-[400px] mb-10"
        />
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mb-10 rounded-md transition-colors duration-200 font-medium cursor-pointer">
            Get Started
          </button>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          Built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </div>
    </main>
  );
}
