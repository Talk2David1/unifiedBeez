'use client';

import { Button } from '@/shared/components/ui/Button';
import { useTheme } from '@/core/providers/ThemeProvider';

export default function HomePage() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-primary">
            UnifiedBeez
          </h1>
          <p className="text-2xl text-text-secondary">
            Business Communication Platform
          </p>
          <p className="text-lg text-text-tertiary">
            Frontend Foundation Successfully Initialized
          </p>
        </div>

        <div className="bg-surface-light border border-border-medium rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            ✅ Architecture Features
          </h2>
          <ul className="space-y-3 text-text-secondary">
            <li>✓ Feature-Based Architecture</li>
            <li>✓ Next.js 14+ with App Router</li>
            <li>✓ TypeScript with Strict Mode</li>
            <li>✓ Tailwind CSS with Custom Theme</li>
            <li>✓ Redux Toolkit for State Management</li>
            <li>✓ Dark Mode Support</li>
            <li>✓ API Client with Interceptors</li>
            <li>✓ SOLID Principles Implementation</li>
            <li>✓ Separation of Concerns (SoC)</li>
          </ul>
        </div>

        <div className="bg-surface-light border border-border-medium rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">
            🎨 Theme System
          </h2>
          <div className="flex gap-4 items-center">
            <span className="text-text-secondary">Current Theme: {resolvedTheme}</span>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant={theme === 'light' ? 'primary' : 'outline'}
                onClick={() => setTheme('light')}
              >
                Light
              </Button>
              <Button 
                size="sm" 
                variant={theme === 'dark' ? 'primary' : 'outline'}
                onClick={() => setTheme('dark')}
              >
                Dark
              </Button>
              <Button 
                size="sm" 
                variant={theme === 'system' ? 'primary' : 'outline'}
                onClick={() => setTheme('system')}
              >
                System
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-surface-light border border-border-medium rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">
            🚀 Component Examples
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>

        <div className="bg-surface-light border border-border-medium rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">
            📂 Project Structure
          </h2>
          <pre className="text-sm text-text-secondary bg-background-dark p-4 rounded overflow-x-auto">
{`src/
├── app/              # Next.js pages and layouts
├── features/         # Feature modules
├── shared/           # Shared resources
│   ├── components/   # UI components
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Utility functions
│   └── services/     # Shared services
├── core/             # Core infrastructure
│   ├── store/        # Redux store
│   ├── api/          # API client
│   └── providers/    # Context providers
└── types/            # TypeScript types`}
          </pre>
        </div>

        <div className="text-center text-text-tertiary">
          <p>Ready for feature development! 🎉</p>
        </div>
      </div>
    </main>
  );
}
