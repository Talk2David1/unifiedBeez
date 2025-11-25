import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{
        width: '32.5rem',
        height: '61.125rem',
        padding: '2.5rem',
        gap: '1.5rem',
        borderRadius: '1.5rem',
        background: 'linear-gradient(165deg, #E6FAF2 -11.22%, #E3CF9B 219.35%)',
        boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
      }}
    >
      {children}
    </div>
  );
};
