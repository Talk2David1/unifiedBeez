import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { StoreProvider } from '@/core/providers/StoreProvider';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import '@/shared/styles/globals.css';

const skModernist = localFont({
  src: [
    {
      path: '../../public/fonts/Sk-Modernist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sk-Modernist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UnifiedBeez - Business Communication Platform',
  description: 'Supercharge your business communication & connect with customers using AI, automation, and multi-channel messaging.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={skModernist.variable}>
        <StoreProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
