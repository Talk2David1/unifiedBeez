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
        white: 'rgb(var(--color-base-white) / <alpha-value>)',
        
        // Dark base scale
        'dark-base': {
          100: 'rgb(var(--color-dark-base-100) / <alpha-value>)',
          90: 'rgb(var(--color-dark-base-90) / <alpha-value>)',
          80: 'rgb(var(--color-dark-base-80) / <alpha-value>)',
          70: 'rgb(var(--color-dark-base-70) / <alpha-value>)',
          60: 'rgb(var(--color-dark-base-60) / <alpha-value>)',
          50: 'rgb(var(--color-dark-base-50) / <alpha-value>)',
          40: 'rgb(var(--color-dark-base-40) / <alpha-value>)',
          30: 'rgb(var(--color-dark-base-30) / <alpha-value>)',
          20: 'rgb(var(--color-dark-base-20) / <alpha-value>)',
          10: 'rgb(var(--color-dark-base-10) / <alpha-value>)',
        },
        
        // Primary colors (#053D27)
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          10: 'rgb(var(--color-primary-10) / <alpha-value>)',
          20: 'rgb(var(--color-primary-20) / <alpha-value>)',
          30: 'rgb(var(--color-primary-30) / <alpha-value>)',
          40: 'rgb(var(--color-primary-40) / <alpha-value>)',
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          60: 'rgb(var(--color-primary-60) / <alpha-value>)',
          70: 'rgb(var(--color-primary-70) / <alpha-value>)',
          80: 'rgb(var(--color-primary-80) / <alpha-value>)',
          90: 'rgb(var(--color-primary-90) / <alpha-value>)',
        },
        
        // Secondary colors (#FFFFFF)
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          90: 'rgb(var(--color-secondary-90) / <alpha-value>)',
          80: 'rgb(var(--color-secondary-80) / <alpha-value>)',
          70: 'rgb(var(--color-secondary-70) / <alpha-value>)',
          60: 'rgb(var(--color-secondary-60) / <alpha-value>)',
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          40: 'rgb(var(--color-secondary-40) / <alpha-value>)',
          30: 'rgb(var(--color-secondary-30) / <alpha-value>)',
          20: 'rgb(var(--color-secondary-20) / <alpha-value>)',
          10: 'rgb(var(--color-secondary-10) / <alpha-value>)',
        },
        
        // Tertiary colors (#FAB403)
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary) / <alpha-value>)',
          10: 'rgb(var(--color-tertiary-10) / <alpha-value>)',
          20: 'rgb(var(--color-tertiary-20) / <alpha-value>)',
          30: 'rgb(var(--color-tertiary-30) / <alpha-value>)',
          40: 'rgb(var(--color-tertiary-40) / <alpha-value>)',
          50: 'rgb(var(--color-tertiary-50) / <alpha-value>)',
          60: 'rgb(var(--color-tertiary-60) / <alpha-value>)',
          70: 'rgb(var(--color-tertiary-70) / <alpha-value>)',
          80: 'rgb(var(--color-tertiary-80) / <alpha-value>)',
          90: 'rgb(var(--color-tertiary-90) / <alpha-value>)',
        },
        
        // Fresh Green (Success)
        'fresh-green': {
          DEFAULT: 'rgb(var(--color-fresh-green) / <alpha-value>)',
          10: 'rgb(var(--color-fresh-green-10) / <alpha-value>)',
          20: 'rgb(var(--color-fresh-green-20) / <alpha-value>)',
          30: 'rgb(var(--color-fresh-green-30) / <alpha-value>)',
          40: 'rgb(var(--color-fresh-green-40) / <alpha-value>)',
          50: 'rgb(var(--color-fresh-green-50) / <alpha-value>)',
          60: 'rgb(var(--color-fresh-green-60) / <alpha-value>)',
          70: 'rgb(var(--color-fresh-green-70) / <alpha-value>)',
          80: 'rgb(var(--color-fresh-green-80) / <alpha-value>)',
          90: 'rgb(var(--color-fresh-green-90) / <alpha-value>)',
        },
        
        // Success (alias for fresh-green)
        success: {
          DEFAULT: 'rgb(var(--color-fresh-green) / <alpha-value>)',
          10: 'rgb(var(--color-fresh-green-10) / <alpha-value>)',
          20: 'rgb(var(--color-fresh-green-20) / <alpha-value>)',
          30: 'rgb(var(--color-fresh-green-30) / <alpha-value>)',
          40: 'rgb(var(--color-fresh-green-40) / <alpha-value>)',
          50: 'rgb(var(--color-fresh-green-50) / <alpha-value>)',
          60: 'rgb(var(--color-fresh-green-60) / <alpha-value>)',
          70: 'rgb(var(--color-fresh-green-70) / <alpha-value>)',
          80: 'rgb(var(--color-fresh-green-80) / <alpha-value>)',
          90: 'rgb(var(--color-fresh-green-90) / <alpha-value>)',
        },
        
        // Soft Green
        'soft-green': 'rgb(var(--color-soft-green) / <alpha-value>)',
        
        // Warning (alias for tertiary)
        warning: {
          DEFAULT: 'rgb(var(--color-tertiary) / <alpha-value>)',
          10: 'rgb(var(--color-tertiary-10) / <alpha-value>)',
          20: 'rgb(var(--color-tertiary-20) / <alpha-value>)',
          30: 'rgb(var(--color-tertiary-30) / <alpha-value>)',
          40: 'rgb(var(--color-tertiary-40) / <alpha-value>)',
          50: 'rgb(var(--color-tertiary-50) / <alpha-value>)',
          60: 'rgb(var(--color-tertiary-60) / <alpha-value>)',
          70: 'rgb(var(--color-tertiary-70) / <alpha-value>)',
          80: 'rgb(var(--color-tertiary-80) / <alpha-value>)',
          90: 'rgb(var(--color-tertiary-90) / <alpha-value>)',
        },
        
        // Error colors
        error: {
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          10: 'rgb(var(--color-error-10) / <alpha-value>)',
          20: 'rgb(var(--color-error-20) / <alpha-value>)',
          30: 'rgb(var(--color-error-30) / <alpha-value>)',
          40: 'rgb(var(--color-error-40) / <alpha-value>)',
          50: 'rgb(var(--color-error-50) / <alpha-value>)',
          60: 'rgb(var(--color-error-60) / <alpha-value>)',
          70: 'rgb(var(--color-error-70) / <alpha-value>)',
          80: 'rgb(var(--color-error-80) / <alpha-value>)',
          90: 'rgb(var(--color-error-90) / <alpha-value>)',
        },
        
        // Input colors
        input: {
          stroke: 'rgb(var(--color-input-stroke) / <alpha-value>)',
          filled: 'rgb(var(--color-input-filled) / <alpha-value>)',
        },
        
        // Toggle
        toggle: {
          filled: 'rgb(var(--color-toggle-filled) / <alpha-value>)',
        },
        
        // Inactive colors
        inactive: {
          DEFAULT: 'rgb(var(--color-inactive) / <alpha-value>)',
          2: 'rgb(var(--color-inactive-2) / <alpha-value>)',
        },
        
        // Neutral colors
        background: {
          light: 'rgb(var(--color-background-light) / <alpha-value>)',
          lighter: 'rgb(var(--color-background-lighter) / <alpha-value>)',
          dark: 'rgb(var(--color-background-dark) / <alpha-value>)',
          darker: 'rgb(var(--color-background-darker) / <alpha-value>)',
        },
        surface: {
          light: 'rgb(var(--color-surface-light) / <alpha-value>)',
          lighter: 'rgb(var(--color-surface-lighter) / <alpha-value>)',
          dark: 'rgb(var(--color-surface-dark) / <alpha-value>)',
          darker: 'rgb(var(--color-surface-darker) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
          inverse: 'rgb(var(--color-text-inverse) / <alpha-value>)',
        },
        border: {
          light: 'rgb(var(--color-border-light) / <alpha-value>)',
          medium: 'rgb(var(--color-border-medium) / <alpha-value>)',
          dark: 'rgb(var(--color-border-dark) / <alpha-value>)',
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
