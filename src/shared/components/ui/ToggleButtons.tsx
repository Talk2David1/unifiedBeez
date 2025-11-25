import React from 'react';

interface ToggleButtonsProps {
  selected: 'create' | 'login';
  onSelect: (option: 'create' | 'login') => void;
  className?: string;
}

export const ToggleButtons: React.FC<ToggleButtonsProps> = ({ 
  selected, 
  onSelect, 
  className = '' 
}) => {
  return (
    <div 
      className={className}
      style={{
        width: '440px',
        height: '40px',
        borderRadius: '8px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        opacity: 0.8,
        gap: '20px',
        paddingTop: '8px',
        paddingRight: '16px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        onClick={() => onSelect('create')}
        className={`font-medium transition-all ${
          selected === 'create'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'bg-transparent text-gray-600 hover:text-gray-900'
        }`}
        style={{
          width: '227px',
          height: '40px',
          borderRadius: '8px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: selected === 'create' ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
          opacity: 1,
          padding: '8px',
          gap: '12px',
        }}
      >
        Create Account
      </button>
      <button
        onClick={() => onSelect('login')}
        className={`font-medium transition-all ${
          selected === 'login'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'bg-transparent text-gray-600 hover:text-gray-900'
        }`}
        style={{
          width: '227px',
          height: '40px',
          borderRadius: '8px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: selected === 'login' ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
          opacity: 1,
          padding: '8px',
          gap: '12px',
        }}
      >
        Log In
      </button>
    </div>
  );
};
