import React from 'react';
import Image from 'next/image';
import { cn } from '@/shared/utils/helpers';

interface TestimonialCardProps {
  quote: string;
  avatarSrc: string;
  name: string;
  title: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  avatarSrc,
  name,
  title,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-4 shadow-md text-text-primary',
        className
      )}
      style={{ maxWidth: '600px', backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '14px' }}
    >
      <p className="text-sm text-text-primary mb-4 leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={avatarSrc}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-text-primary">{name}</p>
          <p className="text-xs text-text-secondary">{title}</p>
        </div>
      </div>
    </div>
  );
};
