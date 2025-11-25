'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CopilotOnboardingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center p-12">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logos/primary/UNIFIEDBEEZ LOGO PRIMARY 1 1.png"
            alt="UnifiedBeez Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Placeholder Content */}
        <div
          className="flex flex-col items-center"
          style={{
            width: '32rem',
            padding: '3rem',
            gap: '1.5rem',
            borderRadius: '1.5rem',
            background: 'linear-gradient(165deg, #E6FAF2 -11.22%, #E3CF9B 219.35%)',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
          }}
        >
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-3xl font-bold text-center">Copilot Onboarding</h1>
          <p className="text-center text-gray-600">
            AI-assisted onboarding experience coming soon!
          </p>
          <p className="text-sm text-center text-gray-500 mt-4">
            This is a placeholder page. You can now add your copilot onboarding content here.
          </p>
          
          {/* Back to Home */}
          <Link href="/" className="mt-6">
            <button className="px-6 py-3 bg-[#053D27] text-white rounded-lg hover:opacity-90 transition-opacity">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
