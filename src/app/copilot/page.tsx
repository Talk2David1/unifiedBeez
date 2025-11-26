'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SocialIconsBar } from '@/shared/components';

export default function CopilotOnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <div className="flex-1 flex items-center justify-center">
        {/* Modal Card */}
        <div className="flex flex-col items-center w-[28rem] p-8 gap-4 rounded-3xl bg-white shadow-lg">
          {/* Bee Icon */}
          <div className="mb-2">
            <Image
              src="/logos/secondary/beeLogo.png"
              alt="Beezaro"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <h1 className="text-xl font-bold text-center m-0">Hi there! I'm Beezaro</h1>
          <p className="text-sm text-center text-gray-600 m-0">
            I'll set everything up for you in just a few questions. Ready?
          </p>

          <div className="flex flex-col w-full" style={{ gap: '1.5rem' }}>
            {/* Yes, let's go Button */}
            <Link href="/copilot/onboarding" className="w-full no-underline block">
              <button className="w-full btn-primary">
                Yes, let's go
              </button>
            </Link>

            {/* Show me the manual setup instead */}
            <Link href="/manual" className="w-full no-underline block">
              <button className="w-full btn-white-outline">
                Show me the manual setup instead
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Footer */}
      <div className="pb-8">
        <SocialIconsBar className="mt-0" />
      </div>
    </main>
  );
}
