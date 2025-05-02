'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DarkModeToggle from '@/app/components/DarkModeToggle';

export default function Header() {
  const router = useRouter();

  return (
    <header className="p-4 font-bold">
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
          onClick={() => router.push('/')}
        >
          MovieSync
        </div>
        <DarkModeToggle />
      </span>
    </header>
  );
}
