'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">
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
          <div className="mb-4">
            <Image
              src="/logos/primary/UNIFIEDBEEZ LOGO PRIMARY 1 1.png"
              alt="UnifiedBeez Logo"
              width={180}
              height={54}
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-center">Setup up your account</h1>
          <p className="text-sm text-center text-gray-600">
            Let us set up your UnifiedBeez Account
          </p>

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

        {/* Social Media Icons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Image src="/icons/social/whatsapp.png" alt="WhatsApp" width={48} height={48} />
          <Image src="/icons/social/facebook.png" alt="Facebook" width={48} height={48} />
          <Image src="/icons/social/instagram.png" alt="Instagram" width={48} height={48} />
          <Image src="/icons/social/zoho.png" alt="Zoho" width={48} height={48} />
          <Image src="/icons/social/chat.png" alt="Chat" width={48} height={48} />
          <Image src="/icons/social/Calendly.png" alt="Calendly" width={48} height={48} />
          <Image src="/icons/social/slack.png" alt="Slack" width={48} height={48} />
          <Image src="/icons/social/shopify.png" alt="Shopify" width={48} height={48} />
          <Image src="/icons/social/paypal.png" alt="PayPal" width={48} height={48} />
        </div>
      </div>
    </main>
  );
}
