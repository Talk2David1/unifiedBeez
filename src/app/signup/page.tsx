import type { Metadata } from 'next';
import { SignupForm } from '@/features/auth/components/SignupForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up - UnifiedBeez',
  description: 'Create your UnifiedBeez account to supercharge your business communication.',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background-light">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center space-y-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-primary">UnifiedBeez</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-text-primary">Create Account</h1>
            <p className="text-text-secondary">
              Join UnifiedBeez to streamline your business communication
            </p>
          </div>

          {/* Signup Form */}
          <SignupForm />
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-primary p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight">
              Supercharge your business communication & connect with customers
            </h2>
            <p className="text-lg text-white/80">
              UnifiedBeez is designed to help any business amplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of UnifiedBeez as a smarter way for businesses to talk to customers.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fresh-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI-Powered Messaging</h3>
                <p className="text-white/70">
                  Leverage AI to automate and enhance customer conversations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fresh-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Multi-Channel Support</h3>
                <p className="text-white/70">
                  Connect with customers across WhatsApp, SMS, Email, and more
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-fresh-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Smart Automation</h3>
                <p className="text-white/70">
                  Automate workflows and save time on repetitive tasks
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-dark-base-100 font-bold text-lg">
                AG
              </div>
              <div>
                <p className="font-semibold">Adrino Grande</p>
                <p className="text-sm text-white/70">CEO, TechStartup</p>
              </div>
            </div>
            <p className="text-white/90 italic">
              "UnifiedBeez has transformed the way we communicate with our customers. The magic possibilities this tool has unlocked are phenomenal. Highly recommended!"
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-tertiary border-2 border-primary flex items-center justify-center text-dark-base-100 text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/70">
              Join <span className="font-semibold text-white">40,000+</span> businesses already using UnifiedBeez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
