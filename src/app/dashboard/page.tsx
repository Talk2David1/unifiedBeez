import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - UnifiedBeez',
  description: 'Your UnifiedBeez dashboard',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background-light p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary">Welcome to UnifiedBeez!</h1>
          <p className="text-text-secondary mt-2">Your account has been successfully created.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-light border border-border-medium rounded-lg p-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Messages</h3>
            <p className="text-text-secondary text-sm">Start conversations with your customers</p>
          </div>

          <div className="bg-surface-light border border-border-medium rounded-lg p-6">
            <div className="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-dark-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Automation</h3>
            <p className="text-text-secondary text-sm">Set up workflows to save time</p>
          </div>

          <div className="bg-surface-light border border-border-medium rounded-lg p-6">
            <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Analytics</h3>
            <p className="text-text-secondary text-sm">Track your communication metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
