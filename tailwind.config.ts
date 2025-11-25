import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors
        white: '#FFFFFF',
        
        // Dark base scale
        'dark-base': {
          100: '#000000',
          90: '#1A1A1A',
          80: '#333333',
          70: '#4D4D4D',
          60: '#666666',
          50: '#808080',
          40: '#999999',
          30: '#B3B3B3',
          20: '#CCCCCC',
          10: '#E6E6E6',
        },
        
        // Primary colors (#053D27)
        primary: {
          DEFAULT: '#053D27',
          10: '#EAF6F2',
          20: '#D5EDE5',
          30: '#AADCCB',
          40: '#80C9B1',
          50: '#55B797',
          60: '#408A71',
          70: '#2A5C4B',
          80: '#152E26',
          90: '#0B1F19',
        },
        
        // Secondary colors (#FFFFFF)
        secondary: {
          DEFAULT: '#FFFFFF',
          100: '#FFFFFF',
          90: '#F2F2F2',
          80: '#E5E5E5',
          70: '#D9D9D9',
          60: '#CCCCCC',
          50: '#BFBFBF',
          40: '#B2B2B2',
          30: '#A5A5A5',
          20: '#999999',
          10: '#8C8C8C',
        },
        
        // Tertiary colors (#FAB403)
        tertiary: {
          DEFAULT: '#FAB403',
          10: '#FFFAE6',
          20: '#FEF5CC',
          30: '#FDEB99',
          40: '#FCE166',
          50: '#FBD733',
          60: '#FAB403',
          70: '#C89002',
          80: '#966C02',
          90: '#644801',
        },
        
        // Fresh Green (Success)
        'fresh-green': {
          DEFAULT: '#22C55E',
          10: '#F0FDF4',
          20: '#DCFCE7',
          30: '#BBF7D0',
          40: '#86EFAC',
          50: '#4ADE80',
          60: '#22C55E',
          70: '#16A34A',
          80: '#15803D',
          90: '#14532D',
        },
        
        // Success (alias for fresh-green)
        success: {
          DEFAULT: '#22C55E',
          10: '#F0FDF4',
          20: '#DCFCE7',
          30: '#BBF7D0',
          40: '#86EFAC',
          50: '#4ADE80',
          60: '#22C55E',
          70: '#16A34A',
          80: '#15803D',
          90: '#14532D',
        },
        
        // Soft Green
        'soft-green': '#90EE90',
        
        // Warning (alias for tertiary)
        warning: {
          DEFAULT: '#FAB403',
          10: '#FFFAE6',
          20: '#FEF5CC',
          30: '#FDEB99',
          40: '#FCE166',
          50: '#FBD733',
          60: '#FAB403',
          70: '#C89002',
          80: '#966C02',
          90: '#644801',
        },
        
        // Error colors
        error: {
          DEFAULT: '#DC2626',
          10: '#FEF2F2',
          20: '#FEE2E2',
          30: '#FECACA',
          40: '#FCA5A5',
          50: '#F87171',
          60: '#EF4444',
          70: '#DC2626',
          80: '#B91C1C',
          90: '#991B1B',
        },
        
        // Input colors
        input: {
          stroke: '#D1D5DB',
          filled: '#F9FAFB',
        },
        
        // Toggle
        toggle: {
          filled: '#053D27',
        },
        
        // Inactive colors
        inactive: {
          DEFAULT: '#9CA3AF',
          2: '#D1D5DB',
        },
        
        // Neutral colors
        background: {
          light: '#F9FAFB',
          lighter: '#FFFFFF',
          dark: '#F3F4F6',
          darker: '#E5E7EB',
        },
        surface: {
          light: '#F9FAFB',
          lighter: '#FFFFFF',
          dark: '#F3F4F6',
          darker: '#E5E7EB',
        },
        text: {
          primary: '#000000',
          secondary: '#4D4D4D',
          tertiary: '#808080',
          inverse: '#FFFFFF',
        },
        border: {
          light: '#E6E6E6',
          medium: '#CCCCCC',
          dark: '#B3B3B3',
        },
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        'full': '9999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '1' }],
        '6xl': ['60px', { lineHeight: '1' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
