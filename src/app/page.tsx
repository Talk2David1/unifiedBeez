'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SocialIconsBar } from '@/shared/components';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <div className="flex-1 flex items-center justify-center">
        {/* Card Container */}
        <div
          className="flex flex-col items-center"
          style={{
            width: '28rem',
            padding: '2rem',
            gap: '1rem',
            borderRadius: '1.5rem',
            background: 'linear-gradient(165deg, #E6FAF2 -11.22%, #E3CF9B 219.35%)',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
          }}
        >
          {/* Logo */}
          <div>
            <Image
              src="/logos/primary/UNIFIEDBEEZ LOGO PRIMARY 1 1.png"
              alt="UnifiedBeez Logo"
              width={180}
              height={54}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-center m-0">Setup up your account</h1>
          <p className="text-sm text-center text-gray-600 m-0">
            Let us set up your UnifiedBeez Account
          </p>
          </div>

          {/* Copilot Button */}
          <Link href="/copilot" className="w-full no-underline">
            <button className="w-full flex items-center justify-center gap-2 btn-primary">
              <span>Let Beezaro Set Everything Up For Me</span>
              <Image src="/logos/secondary/BEE ICON svg 1.png" alt="Bee" width={20} height={20} />
            </button>
          </Link>

          {/* Manual Setup Button */}
          <Link href="/manual" className="w-full">
            <button className="w-full btn-tertiary">
              Customize It Myself Instead {'>'}
            </button>
          </Link>

          {/* Skip for now */}
          <button className="w-full btn-white">
            Skip for now
          </button>
        </div>
      </div>

      {/* Social Media Icons - Footer */}
      <div className="pb-8">
        <SocialIconsBar className="mt-0" />
      </div>
    </main>
  );
}
