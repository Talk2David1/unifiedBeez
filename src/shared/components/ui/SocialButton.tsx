import React from 'react';
import Image from 'next/image';

interface SocialButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 w-[138px] items-center justify-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-4 py-[10px] text-text-primary shadow-[0px_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Image src={icon} alt={text} width={20} height={20} />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};
