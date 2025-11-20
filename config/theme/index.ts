/**
 * Theme Configuration
 * Defines the theme system with support for light and dark modes
 */

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  defaultTheme: Theme;
  storageKey: string;
}

export const themeConfig: ThemeConfig = {
  defaultTheme: 'system',
  storageKey: 'unifiedbeez-theme',
};

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;
