import React from 'react';
import Image from 'next/image';

interface SocialIconsBarProps {
  className?: string;
}

const socialIcons = [
  { src: '/icons/social/whatsapp.png', alt: 'WhatsApp' },
  { src: '/icons/social/facebook.png', alt: 'Facebook' },
  { src: '/icons/social/instagram.png', alt: 'Instagram' },
  { src: '/icons/social/zoho.png', alt: 'Zoho' },
  { src: '/icons/social/chat.png', alt: 'Chat' },
  { src: '/icons/social/Calendly.png', alt: 'Calendly' },
  { src: '/icons/social/slack.png', alt: 'Slack' },
  { src: '/icons/social/shopify.png', alt: 'Shopify' },
  { src: '/icons/social/paypal.png', alt: 'PayPal' },
];

export const SocialIconsBar: React.FC<SocialIconsBarProps> = ({ className = '' }) => {
  return (
    <div className={`overflow-hidden ${className}`} style={{ width: '100%' }}>
      <div className="flex animate-scroll">
        {/* First set of icons */}
        <div className="flex gap-3 shrink-0">
          {socialIcons.map((icon, index) => (
            <Image
              key={`first-${index}`}
              src={icon.src}
              alt={icon.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-3 shrink-0">
          {socialIcons.map((icon, index) => (
            <Image
              key={`second-${index}`}
              src={icon.src}
              alt={icon.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
