'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {Container, ToggleButtons, SocialButton, TestimonialCard, SocialIconsBar } from '@/shared/components';
import { SignupForm } from '@/features/auth/components/SignupForm';

export default function ManualOnboardingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [authMode, setAuthMode] = useState<'create' | 'login'>('create');
  
  const slides = [
    { src: '/images/illustrations/slide-1.png', alt: 'UnifiedBeez AI messaging' },
    { src: '/images/illustrations/side-2.png', alt: 'UnifiedBeez collaboration' },
    { src: '/images/illustrations/slide-3.png', alt: 'UnifiedBeez automation' },
    { src: '/images/illustrations/slide-4.png', alt: 'UnifiedBeez analytics' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="min-h-screen flex">
      {/* Left Column - Background Image with Animated Slides */}
      <div
        className="w-1/2 min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center p-8"
        style={{ backgroundImage: "url('/images/backgrounds/Left Frame.png')" }}
      >
        <div className="absolute inset-0 bg-black/95" aria-hidden="true" />
     
        <div
          className="absolute left-8 z-30 opacity-100"
          style={{
            top: '1.25rem',
            width: '38.75rem',
            height: '15rem',
            color: 'var(--Base-White, #FFF)',
            fontFamily: "'Sk-Modernist', 'Sk Modernist', 'SkModernist', sans-serif",
            fontSize: '2.5rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '1',
            letterSpacing: '0px',
          }}
        >
          Supercharge your business communication & connect <br />
          with customers using AI, <br />
          automation, & multi-<br />
          channel messaging.
        </div>
      
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={400}
              height={400}
              className={`absolute object-contain transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          ))}
        </div>
        
        {/* Testimonial Card */}
        <TestimonialCard
          quote="Unifiedbeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality."
          avatarSrc="/images/photos/signUpAvater.png"
          name="Ariana Grande"
          title="Visual Designer, Google"
          className="absolute bottom-4 left-8 z-30"
        />
      </div>
      
      {/* Right Column - Content */}
      <div className="w-1/2 min-h-screen flex flex-col items-center justify-center p-12 overflow-y-auto">
        <Container>
          <Image
            src="/logos/primary/UNIFIEDBEEZ LOGO PRIMARY 1 1.png"
            alt="UnifiedBeez Logo"
            width={200}
            height={60}
            className="object-contain"
          />
          <ToggleButtons 
            selected={authMode} 
            onSelect={setAuthMode}
          />
          {authMode === 'create' && <SignupForm />}
          
          {/* Social Sign Up/Sign In Options */}
          <div className="mt-6 flex items-center justify-center">
            <SocialButton icon="/logos/partners/icons_google.png" text="Google" />
            <div style={{ width: '16px' }} />
            <SocialButton icon="/logos/partners/apple-mac.png" text="Apple ID" />
            <div style={{ width: '16px' }} />
            <SocialButton icon="/logos/partners/msword.png" text="Microsoft" />
          </div>

          {/* Terms and Privacy Notice */}
          <p className="text-xs text-center text-text-secondary mt-4 px-4">
            By continuing, you agree to UnifiedBeez's Terms of Service and <br />
             acknowledge that you've read our Privacy Policy.
          </p>

        </Container>

        {/* Social Media Icons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Image src="/icons/social/whatsapp.png" alt="WhatsApp" width={60} height={60} />
          <Image src="/icons/social/facebook.png" alt="Facebook" width={60} height={60} />
          <Image src="/icons/social/instagram.png" alt="Instagram" width={60} height={60} />
          <Image src="/icons/social/messenger.png" alt="Messenger" width={60} height={60} />
          <Image src="/icons/social/chat.png" alt="Chat" width={60} height={60} />
          <Image src="/icons/social/telegram.png" alt="Telegram" width={60} height={60} />
          <Image src="/icons/social/slack.png" alt="Slack" width={60} height={60} />
          <Image src="/icons/social/shopify.png" alt="Shopify" width={60} height={60} />
          <Image src="/icons/social/paypal.png" alt="PayPal" width={60} height={60} />
        </div>
      </div>
    </main>
  );
}
