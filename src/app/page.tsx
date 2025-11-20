'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
        <div className="relative w-full max-w-xl aspect-square">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 600px"
              priority={index === 0}
              className={`object-contain transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Right Column - Content */}
      <div className="w-1/2 min-h-screen flex items-center justify-center p-12 overflow-y-auto">
        <div className="max-w-2xl w-full space-y-8">
        </div>
      </div>
    </main>
  );
}
