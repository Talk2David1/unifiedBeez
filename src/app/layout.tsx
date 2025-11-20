import type { Metadata } from 'next';
import { StoreProvider } from '@/core/providers/StoreProvider';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import '@/shared/styles/globals.css';

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
      <body>
        <StoreProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
