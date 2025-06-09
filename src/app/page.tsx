import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function LandingPage() {
  const { userId } = await auth();

  if (userId) {
    // If the user is logged in alread, redirect to /home
    redirect('/home');
  }

  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <Image
        src="/Logo1-sm.png"
        width={270}
        height={195}
        alt="MovieSync Logo"
        className="mr-2 h-auto max-w-[50px]"
      />
      <h1 className="text-3xl font-bold">MovieSync</h1>
      <p className="w-96 text-center">
        Movie Sync helps you and your friends plan movie nights, track what you
        want to watch, and share your excitement for upcoming releases. Browse,
        save, and coordinate your next movie adventure together—all in one
        simple app.
      </p>
      <Link
        href="/sign-in"
        className="rounded-3xl bg-amber-500 px-4 py-2 text-center font-medium hover:bg-amber-600"
      >
        Get Started by Signing In
      </Link>
    </main>
  );
}
