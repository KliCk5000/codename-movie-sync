'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DarkModeToggle from '@/app/components/DarkModeToggle';
import { SignedIn, SignOutButton, UserButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <header className="p-4 font-bold flex justify-center">
      <span className="inline-flex cursor-pointer items-center">
        <Image
          src="/Logo1-sm.png"
          width={270}
          height={195}
          alt="MovieSync Logo"
          className="mr-2 h-auto max-w-[50px]"
          onClick={() => router.push('/')}
        />
        <div
          className="cursor-pointer text-3xl"
          onClick={() => router.push('/home')}
        >
          MovieSync
        </div>
        <DarkModeToggle />
        <SignedIn>
          <div className="ml-4 inline-flex items-center gap-2 p-1">
            <UserButton />
            <div className="mr-4">{user?.username}</div>
            <SignOutButton />
          </div>
        </SignedIn>
      </span>
    </header>
  );
}
